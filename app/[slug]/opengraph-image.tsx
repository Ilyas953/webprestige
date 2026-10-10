import { ImageResponse } from 'next/og';
import { getVille } from '@/app/lib/villes';
import { OgFrame } from '@/app/lib/og-frame';

export const alt = 'WebPrestige - Création de site internet';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ville = getVille(slug);

  return new ImageResponse(
    <OgFrame title={ville ? `Création de site internet à ${ville.nom}` : 'Création de site internet'} />,
    { ...size }
  );
}
