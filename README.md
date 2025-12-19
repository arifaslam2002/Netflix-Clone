# 🎬 DebugMedia – Movie Search Application

A modern **Movie Search Web Application** built using **React + Vite**, featuring authentication, protected routes, debounced search, TMDB API integration, and Dark/Light theme support.

---

## 📸 Screenshots

*Add screenshots of:*

1. Sign In Page
2. Home / Search Page
3. Movie Results Grid
4. Dark Mode View

---

## 🔐 Login Credentials

```
Email: test
Password: test
```

---

## ✨ Features

* 🔐 **Authentication System** using React Context
* 🛡 **Protected & Public Routes** (React Router v6)
* 🎥 **Movie Search** powered by **TMDB API**
* ⏳ **Debounced Search Input** for optimized API calls
* 🌗 **Dark / Light Theme Toggle** with persistence
* 💾 **LocalStorage Token Management**
* 📱 **Fully Responsive UI**
* 🎨 **CSS Variables for Theme Management**

---

## 🧠 Tech Stack

* **Frontend:** React + Vite
* **Routing:** React Router v6
* **State Management:** Context API
* **API:** TMDB (The Movie Database)
* **Styling:** CSS + CSS Variables
* **Icons:** React Icons

---

## 🗂 Folder Structure

```
src/
│
├── Components/
│   ├── Navbar/
│   ├── Search/
│   ├── SearchList/
│   └── SignIn/
│
├── context/
│   ├── AuthContext.jsx
│   ├── MovieContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── routes/
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── styles/
│   └── theme.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

2. **Install dependencies**

```bash
npm install
```

3. **Run the project**

```bash
npm run dev
```

4. Open browser at:

```
http://localhost:5173
```

---

## 🔑 TMDB API Setup

1. Create an account at [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Generate an API key
3. Replace the API key inside `MovieContext.jsx`

```js
https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY
```

---

## 🧩 Key Concepts Implemented

### ✅ Authentication

* Context-based auth state
* Token stored in localStorage
* Auto-login on refresh

### ✅ Routing

* Protected routes for authenticated users
* Public routes for login page

### ✅ Debounce

* Custom `useDebounce` hook
* Prevents unnecessary API calls

### ✅ Theme Management

* CSS variables
* `data-theme` attribute
* Persistent theme preference

---

## 🧠 Interview Explanation (Short)

> "This project demonstrates my understanding of React fundamentals including Context API, routing, custom hooks, API integration, and responsive UI design. I implemented authentication, protected routes, debounced search, and theme management using best practices."

---

## 📌 Future Enhancements

* 🎬 Movie Details Page
* ⭐ Ratings & Release Year Overlay
* ❤️ Favorites / Watchlist
* 🔄 Infinite Scroll

---

## 👨‍💻 Author

**Arif A**
Junior Software Engineer (Fresher)

---

## 📜 License

This project is for learning and demonstration purposes.

---

⭐ *If you like this project, don’t forget to star the repository!*
