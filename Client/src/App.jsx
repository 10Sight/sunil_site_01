import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './Layout/HomeLayout';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
