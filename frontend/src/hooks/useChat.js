import { useState, useCallback } from 'react'
import { API_URL } from '../config'

/**
 * useChat — manages all conversation state and API calls.
 * Returns: messages, loading, error, sendMessage, clearChat
 */
export function useChat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || loading) return

    const userMsg      = { role: 'user', content: text.trim() }
    const nextMessages = [...messages, userMsg]

    setMessages(nextMessages)
    setLoading(true)
    setError('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error?.message || `HTTP ${res.status}`)

      const reply = data.reply ?? '(no response)'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [messages, loading])

  const clearChat = useCallback(() => {
    setMessages([])
    setError('')
  }, [])

  return { messages, loading, error, sendMessage, clearChat }
}
