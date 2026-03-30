import { APP_TITLE, APP_SUBTITLE } from '../config'

export default function Header() {
  return (
    <div style={{ width: '100%', maxWidth: 700, marginBottom: 28, textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
        <div style={{ width: 2, height: 26, background: 'linear-gradient(to bottom, transparent, #e8c97e, transparent)' }} />
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 30, fontWeight: 700,
          color: '#f0e8d4', letterSpacing: '0.02em', margin: 0,
        }}>
          {APP_TITLE}
        </h1>
        <div style={{ width: 2, height: 26, background: 'linear-gradient(to bottom, transparent, #e8c97e, transparent)' }} />
      </div>
      <p style={{
        color: 'rgba(232,201,126,0.5)', fontSize: 11,
        letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0,
      }}>
        {APP_SUBTITLE}
      </p>
    </div>
  )
}
