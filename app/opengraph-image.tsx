import { ImageResponse } from 'next/og';
import { OgFrame } from '@/app/lib/og-frame';

export const alt = "WebPrestige - Agence web Val-d'Oise, création de site internet";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(<OgFrame title="Agence web Val-d’Oise : création de site internet" />, { ...size });
}
