export default function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          display: 'block', width: 7, height: 7, borderRadius: '50%',
          background: '#e8c97e',
          animation: `blink 1.2s infinite`,
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  )
}
