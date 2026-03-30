import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001
const MODEL = 'llama-3.3-70b-versatile'
const SYSTEM = 'You are SuviMind, a sharp helpful AI assistant. Be clear and friendly.'

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json({ limit: '50kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', keySet: !!process.env.GROQ_API_KEY })
})

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body

  if (!process.env.GROQ_API_KEY) {
    console.error('❌ GROQ_API_KEY is not set in .env')
    return res.status(500).json({ error: { message: 'GROQ_API_KEY not set in .env file' } })
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        messages: [{ role: 'system', content: SYSTEM }, ...messages]
      })
    })

    const data = await groqRes.json()
    console.log('Groq status:', groqRes.status)

    if (!groqRes.ok) {
      console.error('❌ Groq error:', JSON.stringify(data))
      return res.status(groqRes.status).json({ error: { message: data?.error?.message || 'Groq API error' } })
    }

    const reply = data.choices?.[0]?.message?.content ?? '(no response)'
    console.log('✅ Reply:', reply.slice(0, 60))
    res.json({ reply })

  } catch (err) {
    console.error('❌ Fetch error:', err.message)
    res.status(500).json({ error: { message: err.message } })
  }
})

app.listen(PORT, () => {
  console.log(`✦ Backend running → http://localhost:${PORT}`)
  console.log(`✦ Groq key set: ${!!process.env.GROQ_API_KEY}`)
})