

---

```markdown
# 💬 Helm Chat Application

A **real-time chat application** built using **React (frontend)** and **Node.js + Socket.IO (backend)** — designed, containerized, and prepared for **Kubernetes (EKS)** deployment with **Helm**.  
This project combines *full-stack development* + *DevOps practices* for a complete corporate-grade setup. ⚙️☁️  

---

## 🧠 Project Overview

**Helm Chat** is a minimal yet modern chat platform that supports **live message exchange** between users in real time.  
It’s designed as a **DevOps learning project**, demonstrating how to build, containerize, and deploy multi-service applications on AWS using Helm.

---

## ⚙️ Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| 🎨 **Frontend** | React (Vite) + Socket.IO Client | Handles user interface & message events |
| ⚙️ **Backend** | Node.js + Express + Socket.IO | Real-time server for handling chat messages |
| 🗄️ **Database** | PostgreSQL (planned) | Message and user persistence |
| ⚡ **Cache** | Redis (planned) | Fast message caching |
| ☸️ **Deployment** | Docker + Kubernetes (AWS EKS) | Container orchestration |
| 📦 **Package Manager** | Helm | Chart-based deployment management |

---

## 🧭 Project Architecture

```

helm-chat-app/
├── frontend/        # React + Vite app (UI)
├── backend/         # Node.js + WebSocket server
├── database/        # Database setup (PostgreSQL)
├── helm/            # Helm charts for deployment
└── README.md        # You're here :)

````

---

## 🚀 Features

✅ Real-time chat with Socket.IO  
✅ Clean and modern UI with minimal CSS  
✅ Messages appear instantly across tabs  
✅ Sent messages (right), received messages (left)  
✅ Ready for Docker, Helm, and Kubernetes deployment  
✅ Scalable and cloud-ready for AWS EKS  

---

## 🪜 Project Phases

### **Phase 0 — Project Base Setup**
- Created project structure & GitHub repo  
- Added folders: `frontend`, `backend`, `database`, `helm`  
- Initialized Git & README.md  

### **Phase 1A — Frontend Setup**
- Created React app using Vite  
- Installed `socket.io-client`  
- Built modern minimalist chat UI  
- Aligned message bubbles (sent → right, received → left)  

### **Phase 1B — Backend Setup**
- Created Node.js + Express server  
- Integrated `socket.io` for real-time messaging  
- Enabled CORS for frontend connection  
- Tested using Node client and React frontend  

### **Phase 2 — Kubernetes Cluster (EKS)**
- Create AWS EKS cluster  
- Connect with `kubectl`  
- Deploy backend & frontend pods  
- Use Helm charts for app management  

---

## 🧩 How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/helm-chat-app.git
cd helm-chat-app
````

### 2️⃣ Start the Backend

```bash
cd backend
npm install
node server.js
```

> 🟢 Server runs on `http://localhost:5000`

### 3️⃣ Start the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> 💻 App runs on `http://localhost:5173`

Now open **two tabs** — start chatting between them! ⚡💬

---

## 🧱 Environment Variables

### Backend (`/backend/.env`)

```env
PORT=5000
DB_HOST=database
DB_USER=postgres
DB_PASSWORD=postgres
REDIS_HOST=redis
```

### Frontend (`/frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

## 🧰 Future Enhancements

🚀 Add PostgreSQL and Redis integration
🧩 Containerize with Docker
☸️ Deploy via Helm on AWS EKS
📊 Add message timestamps & user names
💬 Improve UI animations & themes

---

## 📘 Learning Outcomes

By completing this project, you will:

* Understand **Helm chart creation & deployment**
* Manage multi-service applications with **Kubernetes**
* Handle **secrets, scaling, and rollbacks**
* Deploy real-world apps to **AWS EKS**
* Build confidence in **DevOps + Full-Stack integration**

---

## 🧠 Author

👨‍💻 **Sri Balaji AWS and DevOps Mastero**
🔗 Portfolio: [https://sribalaji.cloud](https://sribalaji.cloud)
📧 Email: [sribalajidevops@gmail.com](mailto:sribalajidevops@gmail.com)
📞 Contact: +91 93453 60790

> “Code. Containerize. Deploy. Repeat.” ⚙️☁️💬

---

## 🪩 Project Snapshot

| Interface     | Description                              |
| ------------- | ---------------------------------------- |
| 💻 Frontend   | Clean minimalist UI                      |
| 💬 Chat       | Sent messages align right, received left |
| ⚙️ Backend    | Real-time message broadcasting           |
| ☸️ Helm Ready | Ready for container deployment           |

---

## 🏁 Final Vision

Once deployed via **Helm on AWS EKS**, this project will showcase a **production-style architecture** featuring:

* Microservices
* Real-time communication
* ConfigMaps & Secrets
* Auto-scaling and rollback management

---

**⭐ If you like this project, give it a star on GitHub!**
Let’s keep building cool stuff — one container at a time 🧠🚀

```

---

Would you like me to add **GitHub badges** (like “Made with Node.js”, “Helm Ready”, “AWS EKS”) and a **preview screenshot section** next to make it even more professional and eye-catching for recruiters or portfolio viewers?
```
