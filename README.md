# 📦 GrubGo – Full Stack Food Delivery App

GrubGo is a full-stack food delivery application built with the MERN stack (MongoDB, Express, ReactJS, Node.js). It allows users to browse restaurants, add items to the cart, and complete their purchase via a **Stripe-powered payment gateway**. An **admin dashboard** allows real-time management of orders and user activities.

---

### 🧭 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Screenshots](#-screenshots)
- [License](#-license)

---

### ✨ Features

#### 👤 User Side (Frontend)
- Browse restaurants and menu items
- Add/remove items to/from cart
- Checkout with **Stripe test payment gateway**
- View past orders

#### 🛠️ Admin Panel
- Dashboard for managing:
  - Orders
  - Menu items
  - Users
- Real-time order tracking
- View analytics/stats (if added)

#### 🔗 Backend
- REST API built with **Express**
- **MongoDB** for data storage
- Secure routes & token-based authentication
- Stripe API integration for payment

---

### 🛠️ Tech Stack

| Tech        | Usage                             |
|-------------|-----------------------------------|
| **ReactJS** | Frontend UI (user + admin panel)  |
| **Node.js** | Backend runtime                   |
| **Express** | API & routing                     |
| **MongoDB** | Database                          |
| **Mongoose** | MongoDB ODM                      |
| **Stripe** | Payment integration               |
| **JWT/Auth** | Secured user sessions             |
| **Axios** | API requests                      |

---

### 🗂 Folder Structure

GrubGo/
│
├── frontend/       # User-facing React app
│   └── ...         
│
├── admin/          # Admin dashboard (React)
│   └── ...         
│
├── backend/        # Node.js + Express + MongoDB API
│   ├── routes/
│   ├── controllers/
│   └── models/
│
└── README.md

---

🚀 Getting Started
Prerequisites
Node.js & npm

MongoDB (local or cloud)

Stripe account for API keys

1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/SAI-RAHUL-M/GrubGo.git
cd GrubGo

2️⃣ Install Dependencies
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd ../frontend
npm install
Admin Panel
bash
Copy
Edit
cd ../admin
npm install

3️⃣ Run the App
Start MongoDB locally or use MongoDB Atlas.

Backend
bash
Copy
Edit
cd backend
npm run dev
Frontend
bash
Copy
Edit
cd ../frontend
npm start
Admin Panel
bash
Copy
Edit
cd ../admin
npm start

---

####🔐 Environment Variables
You'll need to set up .env files in each part of the app (especially backend). Here's a sample for the backend:

env
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
Make sure to never push your .env to GitHub.

---

💳 Stripe Test Cards
Use this test card to simulate payments:

yaml
Copy
Edit
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3-digit number
ZIP: Any 5-digit number
📸 Screenshots
(Add screenshots of the UI – user, cart, admin panel, etc. here)

📄 License
This project is licensed under the MIT License.
