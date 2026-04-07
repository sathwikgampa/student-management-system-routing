import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home'; 
import About from './components/about'; 
import Contact from './components/contact'; 


const NotFound = () => (
  <div className="container text-center mt-5">
    <h1 className="display-1">404</h1>
    <h2>Oops! Page Not Found</h2>
    <p>The page you are looking for at VNR VJIET doesn't exist.</p>
    <a href="/" className="btn btn-primary">Go to Home</a>
  </div>
);


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;