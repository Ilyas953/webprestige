import { ImageResponse } from 'next/og';
import { LogoMark } from '@/app/lib/logo-mark';

// Logo carré servi à une URL stable (/logo.png) pour les données structurées Google
export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(<LogoMark size={512} />, { width: 512, height: 512 });
}
