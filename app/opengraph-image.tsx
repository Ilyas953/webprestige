import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WebPrestige - Sites Web Premium pour Artisans';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '60px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '2px solid rgba(255,255,255,0.2)',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: '#93c5fd',
              marginBottom: '24px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            ⚡ WEBPRESTIGE
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Sites Web Premium
            <br />
            pour Artisans
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#bfdbfe',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Plombiers · Électriciens · Menuisiers · Couvreurs
          </div>
          <div
            style={{
              marginTop: '36px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50px',
              padding: '14px 40px',
              color: 'white',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            webprestige.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
