import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();

    // Validate the incoming data (minimum-data fields only)
    const { name, email, message, consent } = data;
    if (!name || !email || !message || consent !== true) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Here you would typically handle the form submission, e.g., send an email or save to a database

    return NextResponse.json({ success: true });
}