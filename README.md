# SuviMind — AI Chatbot 🤖

> A production-grade full stack AI chatbot built with React.js frontend, Node.js + Express backend, powered by the Groq API (Llama 3.3 70B). API keys are secured server-side and never exposed to the browser.

---

## 🔗 Live Demo

| | Link |
|--|--|
| 🌐 Frontend | [suvi-ai.vercel.app](https://suvi-ai.vercel.app) |
| ⚙️ Backend | Deployed on Render |
| 💻 GitHub | [SwethaArumugam10/suvi-ai](https://github.com/SwethaArumugam10/suvi-ai) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 5, Custom Hooks |
| Backend | Node.js, Express.js |
| AI Model | Groq API — Llama 3.3 70B |
| State Management | React Hooks (useState, useCallback, useRef) |
| Deployment | Vercel (frontend) · Render (backend) |

---

## ✨ Features

- 💬 Real-time multi-turn AI conversation
- 🔒 API key secured server-side — never exposed to browser
- 🧠 Full conversation history sent on every request for context
- ⚡ Typing indicator while AI is responding
- 🧹 Clear chat to reset conversation
- 📱 Responsive — works on mobile and desktop
- ✅ Input validation on both frontend and backend

---

## 🏗️ Architecture

```
User → React Frontend → Node/Express Backend → Groq API (Llama 3.3)
              ↑                   ↑
        Conversation          API key &
        state (hooks)       model locked
                            server-side
```

The frontend only sends the conversation history. The backend handles the API key, model selection, and system prompt — clients cannot modify these.

---

## 📁 Project Structure

```
suvi-ai/
├── frontend/                   # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx      # App title
│   │   │   ├── Message.jsx     # Chat bubble (user / assistant)
│   │   │   ├── MessageList.jsx # Scrollable chat area
│   │   │   ├── ChatInput.jsx   # Textarea + send button
│   │   │   └── TypingDots.jsx  # Animated loading indicator
│   │   ├── hooks/
│   │   │   └── useChat.js      # All API logic & conversation state
│   │   ├── App.jsx
│   │   ├── config.js           # API URL + UI strings only
│   │   └── main.jsx
│   └── package.json
│
└── backend/                    # Node.js + Express
    ├── index.js                # Secure Groq API proxy
    ├── .env.example            # Template (no real keys)
    └── package.json
```

---

## 🚀 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/SwethaArumugam10/suvi-ai.git
cd suvi-ai
```

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Add your Groq API key to `.env`:
```
GROQ_API_KEY=your_key_here
```
Get a free key at [console.groq.com](https://console.groq.com)

```bash
node index.js
# ✦ Backend running → http://localhost:3001
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
# Local: http://localhost:5173
```

Open **http://localhost:5173** — chatbot is live!

---

## 🔒 Security Design

- `GROQ_API_KEY` lives only in `backend/.env` — never in the browser
- Model name is fixed server-side — clients cannot swap models
- System prompt is fixed server-side
- Input validated on every POST request
- CORS restricted to the frontend origin only
- `.env` excluded from git via `.gitignore`

---

## 👩‍💻 Author

**Swetha Arumugam** — Full Stack Developer  
[LinkedIn](https://linkedin.com/in/swetha-arumugam-504369238) · [GitHub](https://github.com/SwethaArumugam10)