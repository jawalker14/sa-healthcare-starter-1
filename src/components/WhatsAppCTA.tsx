import React from 'react';
import { getSettings } from '@/lib/settings';

const WhatsAppCTA: React.FC = () => {
    const { contacts } = getSettings();
    const whatsappNumber = contacts.whatsapp || contacts.phone || '';
    const message = 'Hello, I would like to inquire about your services.';

    return (
        <div className="fixed bottom-5 right-5 z-40">
            <a
                href={whatsappNumber ? `https://wa.me/${encodeURIComponent(whatsappNumber)}?text=${encodeURIComponent(message)}` : '#'}
                className="flex items-center justify-center h-14 w-14 bg-emerald-600 text-white rounded-full shadow-soft hover:shadow-soft-lg hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 transition duration-250 ease-gentle"
                aria-label="Chat with us on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.48 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.73a11.86 11.86 0 0 0 5.73 1.47h.01c6.58 0 11.9-5.32 11.9-11.9 0-3.18-1.24-6.17-3.45-8.36ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76 1.03 1.01-3.66-.24-.38a9.9 9.9 0 0 1-1.53-5.3c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.9 6.98c0 5.45-4.43 9.88-9.88 9.88Zm5.69-7.38c-.31-.16-1.83-.9-2.11-1.01-.28-.1-.49-.16-.7.16-.21.31-.8 1.01-.98 1.22-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.8-1.52-1.79-1.7-2.1-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.02-.54-.08-.16-.7-1.69-.96-2.31-.25-.62-.51-.53-.7-.54h-.6c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.11 2.97 1.26 3.17c.16.21 2.18 3.32 5.29 4.66.74.32 1.31.51 1.76.65.74.23 1.41.2 1.95.12.59-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.48-.08-.12-.28-.18-.59-.33Z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppCTA;