import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CartPage from './Pages/CartPage';
import Menu from './Pages/Menu';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
