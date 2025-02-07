import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const response = await fetch("https://api.jfif2jpg.net/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return NextResponse.json({ message: "Success", data });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
