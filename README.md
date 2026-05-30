# 🚀 Automation Hub

A modern full-stack Automation Demo Project built with React (Vite) frontend and Node.js backend.  
Designed as a portfolio project showcasing API-driven automation execution with a clean UI and scalable architecture.

---

## ✨ Features

- ⚡ React + Vite fast frontend
- 🧠 Node.js backend API for automation execution
- 🔗 Axios API integration between frontend and backend
- 🎨 Modern UI with responsive design
- 🔥 Loading state handling for automation process
- 🧾 CLI branding with "Powered by Shigosag"
- 📡 Simple REST API architecture

---

## 🏗️ Tech Stack

### Frontend
- React 19
- Vite
- Axios
- Inline CSS (no Tailwind dependency)

### Backend
- Node.js
- Express.js
- REST API structure

---

## 📁 Project Structure

```txt
Automation-Hub/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── automations/
│   │   ├── middleware/
│   │   ├── database/
│   │   ├── utils/
│   │   ├── logs/
│   │   └── server.js
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── cli/
│   ├── index.js
│   └── package.json
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

## 🚀 Getting Started

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Shigosag/automation-hub.git
cd automation-hub
```

## Backend Setup
```bash
cd backend
npm install
npx prisma db push
npx prisma generate
npm run dev
```

## 🌐 Backend runs on: 
http://localhost:5000

## Frontend Setup
```bash
cd frontend
npm install
npm install chalk
npm run dev
```

## 🌐 Frontend runs on: 
http://localhost:5173

## CLI Setup
```bash
cd cli
npm install
node index.js run
```

---

## 🔗 API Endpoint

## Run Automation
```bash
POST /api/automation/run
```

---

## 🖥️ UI Preview
- 🚀 Automation Hub title
- 🔥 Powered by Shigosag branding
- ▶️ Run Automation button with loading state

---

## 📌 Author & Credits

- **Author:** Shigosag
- **AI Assistance:** Portions of code generated with AI support
🔥 Powered by Shigosag

---

## 📄 License

MIT License

This project is for portfolio/demo purposes.
