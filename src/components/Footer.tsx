import React from 'react';
import { getSettings } from '@/lib/settings';
import { trackWhatsAppClick } from '@/lib/analytics';
import { buildWhatsAppUrl } from '@/lib/cta';

const Footer: React.FC = () => {
    const s = getSettings();
    const whatsappHref = buildWhatsAppUrl(s.contacts.whatsapp || s.contacts.phone, 'Hello, I would like to enquire about your services.');
    return (
        <footer className="bg-navy-900 text-white pt-12 pb-8 mt-20 border-t border-navy-800">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
                <p className="text-sm/6 text-white/80 max-w-3xl mx-auto">
                    This practice adheres to HPCSA regulations and POPIA. Content on this site is informational and not a substitute for
                    professional medical advice, diagnosis, or treatment.
                </p>
                                <div className="pt-2 space-y-2">
                                        <p className="text-white/80 text-sm">
                                            <a href={`mailto:${s.contacts.email}`} className="underline">{s.contacts.email}</a> · <a href={`tel:${s.contacts.phone}`} className="underline">{s.contacts.phone}</a> · <a href={whatsappHref} aria-label="Chat with us on WhatsApp" data-cta="whatsapp_footer" className="underline" onClick={() => trackWhatsAppClick('footer')}>WhatsApp</a>
                                        </p>
                                        <p className="text-white/70">&copy; {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
                                </div>
            </div>
        </footer>
    );
};

export default Footer;