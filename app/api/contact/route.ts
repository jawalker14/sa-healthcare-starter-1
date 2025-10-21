import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Accept JSON or form submissions
    const contentType = request.headers.get('content-type') || '';
    let name: string | undefined;
    let email: string | undefined;
    let message: string | undefined;
    let consent: boolean | undefined;

    try {
        if (contentType.includes('application/json')) {
            const data = await request.json();
            name = (data?.name ?? '').toString().trim();
            email = (data?.email ?? '').toString().trim();
            message = (data?.message ?? '').toString().trim();
            consent = data?.consent === true || data?.consent === 'true' || data?.consent === 'on';
        } else {
            const form = await request.formData();
            name = (form.get('name') ?? '').toString().trim();
            email = (form.get('email') ?? '').toString().trim();
            message = (form.get('message') ?? '').toString().trim();
            const consentRaw = form.get('consent');
            consent = consentRaw !== null && consentRaw !== undefined && consentRaw !== '';
        }
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    // Validate the incoming data (minimum-data fields only)
    if (!name || !email || !message || consent !== true) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Here you would typically handle the form submission, e.g., send an email or save to a database
    // For now, just return success
    return NextResponse.json({ success: true });
}