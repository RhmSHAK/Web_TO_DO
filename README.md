# 📝 To-Do Task Manager (Multi User)

A full-stack To-Do application where users can register/login and manage their personal tasks securely.  
Each user can only see and manage their own tasks.

---

## 🚀 Features<img width="1628" height="527" alt="Screenshot 2026-04-29 191401" src="https://github.com/user-attachments/assets/06ffc33c-5033-4764-a00e-9823fd8cf7f9" />
<img width="1704" height="541" alt="Screenshot 2026-04-29 191458" src="https://github.com/user-attachments/assets/6ad15c77-6c0e-42c6-8cda-20725cea8f2d" />
<img width="1843" height="959" alt="Screenshot 2026-04-29 190840" src="https://github.com/user-attachments/assets/6a3b59da-8e47-4400-8563-ccf9ce16dacf" />



- 🔐 User Authentication (Firebase)
- 👤 Google Login Support
- ➕ Add new tasks
- ✏️ Edit / Update tasks
- 🗑 Delete tasks
- 🔒 User-specific task isolation (each user sees only their tasks)
- 🌐 REST API with Express + MongoDB

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- React Icons
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB

## 📁 Project Structure

project-root/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── component/
│ │ │ ├── Home/
│ │ │ ├── TaskList/
│ │ │ ├── LogIn/
│ │ │ ├── Register/
│ │ │ └── Navbar/
│ │ ├── contexts/
│ │ ├── firebase/
│ │ ├── layout/
│ │ └── main.jsx
│
└── server/ # Backend API
├── transactionRouter.js
└── index.js

## ⚙️ Setup Instructions

### 1️⃣ Clone the project

git clone <your-repo-url>
cd project-root

### 2️⃣ Backend Setup

       cd server
       npm instal
       
### 🔥 Create `.env` file (optional if needed)

       MONGO_URI=your_mongodb_connection_string
       PORT=3000
         
### ▶️ Run Backend

       nodemon index.js
        
### 3️⃣ Frontend Setup

       cd client
       npm install
         
### 🔥 Firebase Setup

      - Go to Firebase Console  
      - Create a project  
      - Enable Authentication (Email + Google)  
      - Copy Firebase config  

       Add config in:
           src/firebase/firebase.init.js
         
### ▶️ Run Frontend

      npm run dev
