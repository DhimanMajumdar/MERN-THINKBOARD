# 🧠 ThinkBoard

**ThinkBoard** is a minimalistic and responsive full-stack note-taking web application built using the **MERN stack**, with a focus on simplicity, performance, and a touch of style thanks to **DaisyUI**. Designed to help you quickly jot down and manage your ideas, it includes essential features like real-time editing, note creation/deletion, and Redis-powered rate limiting to keep things optimized.

> ✨ Live Site: [https://dhiman-thinkboard.onrender.com](https://dhiman-thinkboard.onrender.com)

---

## 🚀 Features

- 📝 Create, view, edit, and delete notes
- ⚡ Full-stack MERN application (MongoDB, Express, React, Node.js)
- 💄 Styled with Tailwind CSS and DaisyUI for a clean, elegant UI
- 📱 Mobile responsive design
- 🛡️ Simple rate limiting implemented with Redis (to prevent abuse)
- 🔄 Realtime-like UX for note operations (no page reloads)
- 🔥 Deployed on Render

---

## 🧱 Tech Stack

| Tech          | Description                        |
| ------------- | ---------------------------------- |
| **MongoDB**   | Database for storing notes         |
| **Express.js**| Backend API                        |
| **React.js**  | Frontend framework                 |
| **Node.js**   | Backend runtime                    |
| **Redis**     | Rate limiter for safe API access   |
| **TailwindCSS** + **DaisyUI** | Beautiful, customizable styling  |
| **Render**    | Deployment for both frontend & backend |

---

## 📂 Project Structure

```
mern-thinkboard/
├── backend/           # Express backend with MongoDB and Redis
│   ├── controllers/
│   ├── models/
│   └── routes/
├── frontend/          # React frontend with Tailwind + DaisyUI
│   └── src/
│       ├── pages/
│       ├── components/
│       └── ...
├── package.json       # Root scripts to start both client and server
```

---

## 🛠️ Getting Started

Clone the repository:

```bash
git clone https://github.com/DhimanMajumdar/MERN-THINKBOARD.git
cd MERN-THINKBOARD
```

Install dependencies and build frontend:

```bash
npm run build
```

Run development servers:

```bash
npm run dev
```

You can also run backend and frontend separately:

```bash
npm run server   # Starts backend
npm run client   # Starts frontend
```

---

## 🌐 Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm run build`    | Installs all dependencies and builds the frontend |
| `npm run dev`      | Runs both frontend and backend concurrently |
| `npm run client`   | Runs the frontend (React app)     |
| `npm run server`   | Runs the backend (Express server) |

---

## ❗ Environment Variables

Create a `.env` file inside the `backend/` folder with the following:

```env
MONGO_URI=
PORT=

NODE_ENV=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

---

## 🧠 Philosophy

> Built as a **revision project** to refresh my full-stack skills — no fancy auth, no unnecessary animations. Just a clean, efficient, working notes app that I’m proud to ship.

---

## 🙋‍♂️ Author

**Dhiman Majumdar**  
[GitHub](https://github.com/DhimanMajumdar) · [LinkedIn](https://www.linkedin.com/in/dhiman-majumdar-09a3a423a)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, modify, and share it.

---

## 🤝 Contributions

Contributions are welcome! Feel free to open issues or PRs to enhance the app.
