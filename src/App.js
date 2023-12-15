import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import LoginForm from './components/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Početna ruta prikazuje formular za prijavu */}
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
