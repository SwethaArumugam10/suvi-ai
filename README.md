# SuviMind AI Chatbot 🤖✦

A full stack AI chatbot built with **React + Vite** (frontend) and **Node.js + Express** (backend), powered by the **Anthropic Claude API**.

---

## 🏗️ Architecture

```
Frontend (React + Vite)            Backend (Node.js + Express)
        │                                      │
  User types message              ┌────────────┤
        │                         │  API key locked server-side
  POST /api/chat ────────────────►│  Model locked server-side
        │                         │  Input validation
  AI reply ◄───────────────────── │  Proxies to Anthropic
                                   └────────────┤
                                         │
                                  Anthropic Claude API
```

---

## 📁 Project Structure

```
suvi-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   └── TypingDots.jsx
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   ├── App.jsx
│   │   ├── config.js
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/
    ├── index.js
    ├── .env.example
    └── package.json
```

---

## 🚀 Setup & Run

### Step 1 — Backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and add your key:
```
ANTHROPIC_API_KEY=your_real_key_here
```
Get a free key at: https://console.anthropic.com

```bash
node index.js
# ✦ SuviMind backend running → http://localhost:3001
```

### Step 2 — Frontend

```bash
cd frontend
npm install
npm run dev
# Local: http://localhost:5173
```

Open **http://localhost:5173** — your chatbot is live!

---

## 📦 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite 5 |
| Backend | Node.js, Express.js |
| AI | Anthropic Claude API (claude-sonnet-4) |
| Deployment | Vercel (frontend), Render / Railway (backend) |

---

## 🔒 Security

- API key lives only in `backend/.env` — never in the browser
- Model name is fixed server-side — clients cannot swap models
- Input validation on every request
- CORS restricted to your frontend origin

---

## 📤 Push to GitHub

```bash
# From suvi-ai/ root
git init
git add .
git commit -m "Initial commit: SuviMind AI chatbot"
git remote add origin https://github.com/YOUR_USERNAME/suvi-ai.git
git push -u origin main --force
```

The `.gitignore` already excludes `.env` and `node_modules` — your API key is safe.
