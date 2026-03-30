import Header      from './components/Header'
import MessageList from './components/MessageList'
import ChatInput   from './components/ChatInput'
import { useChat } from './hooks/useChat'

export default function App() {
  const { messages, loading, error, sendMessage, clearChat } = useChat()

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      minHeight: '100vh', padding: '32px 16px',
      background: '#0f0d0a', position: 'relative',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'fixed', top: '-5%', left: '50%', transform: 'translateX(-50%)',
        width: 680, height: 260, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(232,201,126,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 700,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <Header />

        {/* Chat card */}
        <div style={{
          width: '100%',
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(232,201,126,0.12)',
          borderRadius: 22,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 28px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}>
          <MessageList messages={messages} loading={loading} error={error} />
          <ChatInput
            onSend={sendMessage}
            loading={loading}
            onClear={clearChat}
            hasMessages={messages.length > 0}
          />
        </div>

        <p style={{
          marginTop: 14, fontSize: 11,
          color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em',
        }}>
          SHIFT + ENTER for new line · ENTER to send
        </p>
      </div>
    </div>
  )
}
