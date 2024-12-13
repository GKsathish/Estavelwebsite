import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Category from './components/Category';
import Contact from './components/Contact';

function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/category" element={<Category/>} />
            <Route path="/contact" element={<Contact/>} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
