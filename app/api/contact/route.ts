import { NextResponse } from 'next/server';

function isEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let message = '';
    let consent = false;
    let honeypot = '';

    try {
        if (contentType.includes('application/json')) {
            const data = await request.json();
            name = (data?.name ?? '').toString().trim();
            email = (data?.email ?? '').toString().trim();
            message = (data?.message ?? '').toString().trim();
            consent = data?.consent === true || data?.consent === 'true' || data?.consent === 'on';
            honeypot = (data?.website ?? '').toString().trim();
        } else {
            const form = await request.formData();
            name = (form.get('name') ?? '').toString().trim();
            email = (form.get('email') ?? '').toString().trim();
            message = (form.get('message') ?? '').toString().trim();
            const consentRaw = form.get('consent');
            consent = consentRaw !== null && consentRaw !== undefined && consentRaw !== '';
            honeypot = (form.get('website') ?? '').toString().trim();
        }
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    // Basic spam: honeypot should be empty
    if (honeypot) {
        return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate minimal required data and consent
    if (!name || !email || !isEmail(email) || !message || consent !== true) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Data minimization: construct safe payload (extend later with email or queue)
    const payload = { name, email, message: message.slice(0, 2000) };
    console.log('Contact submission:', payload);

    return NextResponse.json({ success: true });
}