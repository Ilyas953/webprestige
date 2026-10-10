import { ImageResponse } from 'next/og';
import { OgFrame } from '@/app/lib/og-frame';

export const alt = 'WebPrestige - Création de site internet professionnel';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(<OgFrame title="Création de site internet professionnel" />, { ...size });
}
