import { useEffect, useRef } from 'react'
import Message from './Message'
import TypingDots from './TypingDots'

export default function MessageList({ messages, loading, error }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div style={{
      flex: 1, overflowY: 'auto',
      padding: '28px 24px 16px',
      minHeight: 400, maxHeight: 520,
    }}>
      {/* Empty state */}
      {messages.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 40, marginBottom: 14, opacity: 0.35 }}>✦</div>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 19, color: 'rgba(240,232,212,0.4)',
            fontStyle: 'italic', marginBottom: 6,
          }}>
            Begin your conversation
          </p>
          <p style={{ fontSize: 11, color: 'rgba(232,201,126,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Ask me anything
          </p>
        </div>
      )}

      {/* Messages */}
      {messages.map((msg, i) => (
        <Message key={i} role={msg.role} content={msg.content} />
      ))}

      {/* Typing indicator */}
      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #e8c97e, #c4973a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, marginRight: 10, color: '#1a1410',
          }}>✦</div>
          <div style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px 18px 18px 4px',
          }}>
            <TypingDots />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          textAlign: 'center', padding: '10px 16px', marginBottom: 12,
          color: '#f08080', fontSize: 13,
          background: 'rgba(240,128,128,0.08)',
          border: '1px solid rgba(240,128,128,0.2)',
          borderRadius: 10,
        }}>
          ⚠ {error}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}
