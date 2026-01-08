# 🛒 FreshMart – Grocery E-Commerce Web App

FreshMart is a responsive grocery e-commerce web application that allows users to browse products, manage a shopping cart, and complete a full checkout flow with authentication and protected routes.

🌐 **Live Demo:** https://freshmart890.netlify.app

---

## 🚀 Features

### 🧾 Product & Cart
- Product listing using mock REST API (GitHub-hosted JSON)
- Add to cart / remove from cart
- Quantity update with automatic removal at zero quantity
- Dynamic billing and grand total calculation
- Cart persistence using `localStorage`

### 🔐 Authentication & Route Protection
- Frontend authentication (login / logout)
- Username displayed across the UI
- Session persistence using `localStorage`
- Protected checkout route using a reusable `ProtectedRoute` component
- Prevents unauthorized access via direct URL navigation

### 🛍 Checkout Flow
- Order summary with item breakdown
- Delivery details form with validation
- Place order functionality
- Success page with generated Order ID
- Cart cleared after successful order

### 📱 UI & UX
- Fully responsive design (desktop & mobile)
- Slide-in cart panel
- Mobile-friendly responsive navigation
- Loading and error states
- Clean and user-friendly UI

---

## 🧠 Tech Stack

- **Frontend:** React.js
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **Deployment:** Netlify

---

## 🗂 Project Structure
src/
├── components/
│ ├── Navbar
│ ├── CartComp
│ ├── ResponsiveMenu
│ └── ProtectedRoute
├── pages/
│ ├── Home
│ ├── Shop
│ ├── About
│ ├── Contact
│ ├── Login
│ ├── Checkout
│ └── Success
├── redux/
│ ├── CartSlice
│ ├── AuthSlice
│ └── store.js


---

## 🔐 Authentication & Protected Route Logic

- Authentication state is managed using Redux
- Login session is persisted using `localStorage`
- Checkout route is wrapped inside a `ProtectedRoute` component
- Unauthorized users are redirected to the login page when attempting to access protected routes
- UI-level checks guide users, while route-level protection enforces access control

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/freshmart.git
cd freshmart
npm install
npm start

## 🌱 Future Enhancements

- Payment gateway integration  
- Order history page  
- Saved delivery addresses  
- Backend integration (Node.js / Firebase)  
- Admin dashboard  

---

## 👨‍💻 Author

**Mouneesh**  
Frontend Developer  
Passionate about building responsive, scalable, and user-friendly web applications.

---

## ⭐ Summary

This project was built to practice real-world frontend concepts including state management, authentication flow, protected routes, cart persistence, and UX-driven design.
