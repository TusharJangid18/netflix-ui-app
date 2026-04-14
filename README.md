# 🎬 Netflix UI Clone – JavaScript Assessment Project

## 📌 Overview

This project is a **Netflix-style desktop web application UI** developed as part of a technical assessment. It demonstrates the ability to build a scalable, responsive, and interactive frontend using modern JavaScript (ES6) and React.

The application simulates a **short-form media streaming platform**, allowing users to browse, preview, and manage media content efficiently.

---

## 🚀 Live Demo

👉 *(netflix-ui-qqoj1ptab-tusharjangid18s-projects.vercel.app)*
👉 *(https://github.com/TusharJangid18/netflix-ui-app.git)*

---

## 🛠️ Tech Stack

* **Frontend:** React.js (ES6)
* **Routing:** React Router DOM
* **State Management:** React Hooks
* **API Integration:** TVMaze API (REST API)
* **Storage:** LocalStorage (for watchlist & history)
* **Deployment:** Vercel
* **Version Control:** Git & GitHub

---

## 🎯 Features

### 🔐 Authentication

* Guest login functionality
* Simple login interface (extendable with Firebase)

---

### 🏠 Home Screen

* Displays trending TV shows and movies
* Grid-based responsive layout
* Dynamic rendering using API data

---

### 🎬 Movie Preview

* Click on any movie card to open preview modal
* Displays:

  * Title
  * Description
  * Background image
* Smooth modal interaction

---

### 💾 Watchlist Feature

* Add movies to watchlist
* Stored using LocalStorage
* Persistent across sessions

---

### 👤 Profile Page

* View saved watchlist
* Displays selected movies
* Simple user dashboard

---

### 📡 Offline Support

* Detects internet connection status
* Displays offline message when disconnected
* Caches API data locally

---

### 🎨 UI/UX Features

* Clean and minimal Netflix-style layout
* Responsive design
* Hover effects and transitions
* Modal animations

---

## ⚡ Performance Optimizations

* Efficient rendering using React Hooks
* Avoid unnecessary re-renders
* Lazy loading logic (extendable)
* Optimized component structure

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.js
 │    ├── MovieCard.js
 │    ├── MovieModal.js
 │
 ├── pages/
 │    ├── Home.js
 │    ├── Login.js
 │    ├── Profile.js
 │
 ├── services/
 │    ├── api.js
 │
 ├── App.js
 ├── index.js
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/netflix-ui-app.git
cd netflix-ui-app
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Run the Application

```
npm start
```

---

### 4️⃣ Build for Production

```
npm run build
```

---

## 🌐 Deployment

This project is deployed using **Vercel**.

Steps:

1. Connect GitHub repository to Vercel
2. Configure build settings
3. Deploy instantly

---

## ⚠️ Known Limitations

* No backend authentication (can be added via Firebase)
* Limited search functionality (can be extended)
* Uses free public API (rate limits may apply)

---

## 🔮 Future Enhancements

* 🔍 Search with debounce
* ⚡ Infinite scroll (10,000+ items support)
* 🔐 Firebase authentication
* 🎥 Video playback support
* 🎨 Advanced Netflix-style UI animations
* 📱 Mobile optimization

---

## 🧠 Key Learnings

* Building scalable React applications
* API integration and data handling
* Managing UI state efficiently
* Handling offline-first behavior
* Deployment using Vercel

---

## 👨‍💻 Author

**Tushar Jangid**

* GitHub: https://github.com/TusharJangid18
* Email: *(Add your email here)*

---

## 📜 License

This project is created for educational and assessment purposes only.

---

## ⭐ Acknowledgements

* TVMaze API
* React Documentation
* Vercel Platform

---

🔥 *This project demonstrates strong frontend engineering skills, performance optimization, and UI design principles aligned with real-world applications.*
