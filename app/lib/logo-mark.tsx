// Monogramme WebPrestige, rendu en PNG via ImageResponse (icône Apple + logo schema.org)
export function LogoMark({ size }: { size: number }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#13284a',
        color: 'white',
        fontSize: size * 0.42,
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
        letterSpacing: '-1px',
      }}
    >
      <span>W</span>
      <span style={{ color: '#e8a676' }}>P</span>
    </div>
  );
}
