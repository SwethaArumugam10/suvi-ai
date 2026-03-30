export default function Message({ role, content }) {
  const isUser = role === 'user'

  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: 18,
      animation: 'fadeUp 0.25s ease forwards',
    }}>
      {/* Assistant avatar */}
      {!isUser && (
        <div style={{
          width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #e8c97e, #c4973a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, marginRight: 10, marginTop: 2, color: '#1a1410',
        }}>✦</div>
      )}

      {/* Bubble */}
      <div style={{
        maxWidth: '74%',
        padding: '12px 16px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        background: isUser
          ? 'linear-gradient(135deg, #e8c97e, #d4a843)'
          : 'rgba(255,255,255,0.06)',
        color: isUser ? '#1a1410' : '#e8e0d4',
        border: isUser ? 'none' : '1px solid rgba(255,255,255,0.08)',
        boxShadow: isUser ? '0 4px 16px rgba(232,201,126,0.18)' : '0 2px 10px rgba(0,0,0,0.18)',
        fontSize: 14.5,
        lineHeight: 1.65,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}>
        {content}
      </div>
    </div>
  )
}
