export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { messages } = req.body

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: { message: 'messages must be a non-empty array' } })
    }

    const MODEL = 'llama-3.3-70b-versatile'
    const SYSTEM = 'You are SuviMind, a sharp helpful AI assistant. Be clear and friendly.'

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

        if (!groqRes.ok) {
            return res.status(groqRes.status).json({ error: { message: data?.error?.message || 'Groq API error' } })
        }

        const reply = data.choices?.[0]?.message?.content ?? '(no response)'
        res.status(200).json({ reply })

    } catch (err) {
        res.status(500).json({ error: { message: err.message } })
    }
}