import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://167.235.132.101/api';
const API_KEY = process.env.API_KEY;

export async function POST(request: NextRequest) {
    // TODO: We need to limit the size of the file
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Log API details
        console.log('Making request to:', PYTHON_API_URL);
        console.log('API Key prefix:', API_KEY?.substring(0, 4));

        // Forward the file to Python API
        const pythonFormData = new FormData();
        pythonFormData.append('file', file);

        const response = await fetch(`${PYTHON_API_URL}/convert`, {
            method: 'POST',
            body: pythonFormData,
            headers: {
                'X-API-Key': API_KEY || '',
                'Origin': 'https://jfif2jpg.net',
                'Accept': 'application/json',
                'User-Agent': 'jfif2jpg-frontend'
            },
        });

        // Log response details
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        const responseText = await response.text();
        console.log('Raw response:', responseText);

        if (response.status === 403) {
            return NextResponse.json(
                { 
                    error: 'Access denied',
                    details: 'API key verification failed'
                },
                { status: 403 }
            );
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            return NextResponse.json(
                { 
                    error: 'Invalid response format',
                    details: responseText
                },
                { status: 502 }
            );
        }

        if (!response.ok) {
            return NextResponse.json(
                { 
                    error: data.detail || 'Conversion failed',
                    status: response.status,
                    details: data
                },
                { status: response.status }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Conversion error:', error);
        return NextResponse.json(
            { 
                error: 'Internal server error',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}