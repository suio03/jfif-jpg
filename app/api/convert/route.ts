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

        // Forward the file to Python API
        const pythonFormData = new FormData();
        pythonFormData.append('file', file);
        // console.log('api key', API_KEY);
        const response = await fetch(`${PYTHON_API_URL}/convert`, {
            method: 'POST',
            body: pythonFormData,
            headers: {
                'X-API-Key': API_KEY || '',
            }
        });

        // First try to get the response as text
        const responseText = await response.text();
        let data;
        
        try {
            // Attempt to parse the response as JSON
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse response:', responseText);
            return NextResponse.json(
                { 
                    error: 'Invalid response from conversion service',
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