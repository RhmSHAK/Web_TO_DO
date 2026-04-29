# 📝 To-Do Task Manager (Multi User)

A full-stack To-Do application where users can register/login and manage their personal tasks securely.  
Each user can only see and manage their own tasks.

---

## 🚀 Features

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

---

## 📁 Project Structure

project-root/
│
├── client/ (React Frontend)
│ ├── src/
│ │ ├── component/
│ │ │ ├── Home/
│ │ │ ├── TaskList/
│ │ │ ├── LogIn/
│ │ │ ├── Register/
│ │ │ ├── Navbar/
│ │ ├── contexts/
│ │ ├── firebase/
│ │ ├── layout/
│ │ └── main.jsx
│
├── server/ (Backend API)
│ ├── transactionRouter.js
│ └── index.js


## ⚙️ Setup Instructions

### 1️⃣ Clone the project

git clone <your-repo-url>
cd project-root

2️⃣ Backend Setup
         cd server
         npm install
         
🔥 Create .env file (optional if needed)
         MONGO_URI=your_mongodb_connection_string
         PORT=3000
         
▶️ Run backend
        nodemon index.js
        
3️⃣ Frontend Setup
         cd client
         npm install
         
🔥 Firebase Setup
         Go to Firebase Console
         Create project
         Enable Authentication (Email + Google)
         Copy config and add in:
         src/firebase/firebase.init.js
         
▶️ Run frontend
         npm run dev
