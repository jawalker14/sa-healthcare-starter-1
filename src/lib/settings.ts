import fs from 'fs';
import path from 'path';

export type Settings = {
  contacts: { phone: string; email: string };
  address: { street: string; city: string; province: string; postalCode: string };
  hours: Record<string, string>;
  social: { facebook?: string; twitter?: string; instagram?: string };
  booking?: { enabled?: boolean; url?: string };
  analytics?: { enabled?: boolean; schema?: boolean };
  metaPixel?: { enabled?: boolean; pixelId?: string };
};

const SETTINGS_PATH = path.join(process.cwd(), 'content', 'data', 'settings.json');

export function getSettings(): Settings {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read settings.json', e);
    return {
      contacts: { phone: '', email: '' },
      address: { street: '', city: '', province: '', postalCode: '' },
      hours: {},
      social: {},
      booking: { enabled: false, url: '' },
      analytics: { enabled: false, schema: false },
      metaPixel: { enabled: false, pixelId: '' },
    };
  }
}
