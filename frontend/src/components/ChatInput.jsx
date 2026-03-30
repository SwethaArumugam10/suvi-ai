import { useState, useRef } from 'react'
import { PLACEHOLDER } from '../config'

export default function ChatInput({ onSend, loading, onClear, hasMessages }) {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)

  const handleSend = () => {
    if (!text.trim() || loading) return
    onSend(text)
    setText('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = (e) => {
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
  }

  const canSend = text.trim().length > 0 && !loading

  return (
    <div>
      <div style={{ height: 1, background: 'rgba(232,201,126,0.08)' }} />

      <div style={{ padding: '16px 20px', display: 'flex', gap: 10, alignItems: 'flex-end' }}>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKey}
          onInput={handleInput}
          placeholder={PLACEHOLDER}
          rows={1}
          style={{
            flex: 1, resize: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14, padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            color: '#f0e8d4', fontSize: 14.5,
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.5, maxHeight: 120, overflowY: 'auto',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={e => {
            e.target.style.borderColor = 'rgba(232,201,126,0.4)'
            e.target.style.boxShadow = '0 0 0 3px rgba(232,201,126,0.08)'
          }}
          onBlur={e => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
            e.target.style.boxShadow = 'none'
          }}
        />
        <button
          onClick={handleSend}
          disabled={!canSend}
          style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: canSend
              ? 'linear-gradient(135deg, #e8c97e, #c4973a)'
              : 'rgba(255,255,255,0.08)',
            border: 'none', cursor: canSend ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, color: canSend ? '#1a1410' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.2s',
            boxShadow: canSend ? '0 4px 14px rgba(232,201,126,0.25)' : 'none',
          }}
          title="Send (Enter)"
        >↑</button>
      </div>

      {hasMessages && (
        <div style={{ padding: '0 20px 14px', textAlign: 'right' }}>
          <button
            onClick={onClear}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.3)', fontSize: 11,
              padding: '4px 12px', borderRadius: 8, cursor: 'pointer',
              letterSpacing: '0.08em', fontFamily: 'monospace',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = '#e8c97e'; e.target.style.borderColor = 'rgba(232,201,126,0.3)' }}
            onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.3)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
          >
            CLEAR CHAT
          </button>
        </div>
      )}
    </div>
  )
}
