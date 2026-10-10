// Gabarit commun des images de partage (OpenGraph), rendu par ImageResponse
export function OgFrame({ title, subtitle = 'Analyse gratuite de votre présence en ligne' }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#13284a',
        padding: '72px 80px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'white',
            color: '#13284a',
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>W</span>
          <span style={{ color: '#b4561b' }}>P</span>
        </div>
        <div style={{ color: 'white', fontSize: '34px', fontWeight: 'bold' }}>WebPrestige</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: 'white', fontSize: '68px', fontWeight: 'bold', lineHeight: 1.1, maxWidth: '1000px' }}>
          {title}
        </div>
        <div style={{ marginTop: '28px', display: 'flex' }}>
          <div
            style={{
              background: '#b4561b',
              color: 'white',
              fontSize: '28px',
              padding: '14px 30px',
              borderRadius: '999px',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '26px', fontFamily: 'Arial, sans-serif' }}>
        webprestige.fr
      </div>
    </div>
  );
}
