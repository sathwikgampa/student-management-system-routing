# 🎓 VNR VJIET Student Management System

A modern, responsive Single Page Application (SPA) built using **React.js** to demonstrate advanced frontend navigation for **VNR VJIET**, Hyderabad.

---

> ### 🏛️ Context
> Developed as part of the **Web Application Development (WAD) Lab** curriculum at **VNR VJIET** to master modern frontend architectures.

## 🎯 Project Scope & Purpose
**Note:** This project was developed specifically to implement and demonstrate **Client-Side Routing**. 

* **Academic Focus:** Developed for the Week 12 curriculum to master SPA principles.
* **Navigation:** Primary focus is on seamless page transitions and URL management using `react-router-dom`.
* **Data Handling:** Currently managed via local state and static arrays (Mock Data).
* **Architecture:** No backend or database integration was required for this specific lab implementation.

---

## 🚀 Key Features

* **Dynamic Routing:** Seamless navigation between 5 distinct pages without browser refreshes.
* **404 Error Handling:** A custom "Not Found" catch-all route for invalid URLs.
* **Student Dashboard:** Interactive table displaying student records with status badges.
* **Modern UI:** Built with **Bootstrap 5** for a professional, responsive layout.
* **Interactive Icons:** Visual cues integrated using the `react-icons` library.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── navbar.js    # Navigation menu with icons & Link components
│   ├── home.js      # Student records dashboard (VNR VJIET data)
│   ├── about.js     # Institutional history & vision
│   ├── contact.js   # Campus location & inquiry form
│   ├── login.js     # Secure login interface
│   └── register.js  # New student registration portal
├── App.js           # Main routing configuration & 404 Handling
└── index.js         # Entry point & Bootstrap initialization
