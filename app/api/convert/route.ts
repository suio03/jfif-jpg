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

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.detail || 'Conversion failed' },
                { status: response.status }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Conversion error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}