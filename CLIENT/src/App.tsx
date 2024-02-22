import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
