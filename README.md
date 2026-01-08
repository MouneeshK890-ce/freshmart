# 🛒 FreshMart – Grocery E-Commerce Web App

FreshMart is a responsive grocery e-commerce web application that allows users to browse products, manage a shopping cart, and complete a full checkout flow with authentication and protected routes.

🌐 **Live Demo:** https://freshmart890.netlify.app

---

## ✨ Features

- 🛍️ **Product listing** using mock REST API (GitHub-hosted JSON)
- ➕ **Add items to cart**
- ➖ **Remove items automatically** when quantity reaches zero
- 🔢 **Update item quantity** with real-time bill calculation
- 💰 **Dynamic billing & grand total calculation**
- 💾 **Cart persistence** using LocalStorage
- 🔐 **Frontend authentication** (login / logout)
- 👤 **Username displayed** across the UI after login
- 🚫 **Protected checkout route** using `ProtectedRoute`
- 📦 **Complete checkout flow** (order summary → delivery form → place order)
- 🧾 **Delivery details form** with validation
- ✅ **Order success page** with generated Order ID
- 📱 **Fully responsive UI** (desktop & mobile)
- 🧭 **Slide-in cart panel** and responsive navigation
- ⏳ **Loading and error states**
- 🎨 **Modern, clean UI** using Tailwind CSS

---

## 🧠 Tech Stack

- **Frontend:** React.js
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **Deployment:** Netlify

---

## 🔐 Authentication & Protected Route Logic

- Authentication state is managed using Redux
- Login session is persisted using `localStorage`
- Checkout route is wrapped inside a `ProtectedRoute` component
- Unauthorized users are redirected to the login page when attempting to access protected routes
- UI-level checks guide users, while route-level protection enforces access control

---

## 🧪 How to Run Locally
Clone the repository:
```bash
git clone https://github.com/your-username/freshmart.git
cd freshmart
```
Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

(or)

```bash
npm run dev
```

(depending on your setup)

---

## 🧠 How It Works

- Product and cart data are managed using **Redux Toolkit**
- Cart state is synced with **LocalStorage**, ensuring data persists after page refresh
- Authentication state is stored in Redux and restored from LocalStorage on app load
- Checkout access is controlled using a **ProtectedRoute** component
- UI updates instantly based on global state changes
- Tailwind CSS ensures a clean, responsive, and mobile-friendly layout

---

## 📚 What I Learned

- Structuring scalable applications using **Redux Toolkit slices**
- Managing global state and side effects efficiently
- Persisting application data with **LocalStorage**
- Implementing **authentication flow** on the frontend
- Protecting routes using a reusable **ProtectedRoute** pattern
- Building a complete **checkout flow** with validation
- Handling conditional rendering and UI state changes
- Designing responsive layouts with **Tailwind CSS**
- Improving UX with clean navigation and transitions
- Debugging real-world React and Redux issues

---

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

---
## 🤝 Contributing

Suggestions and pull requests are welcome. Feel free to fork and experiment!

---

## 📧 Contact

**Portfolio:** https://mouneesh-portfolio.web.app  
**LinkedIn:**   https://www.linkedin.com/in/mouneesh-kandhasamy  
**Email:**   mouneesh.kandhasamy@gmail.com

---

⭐ If you found this useful, consider giving the repo a star!
