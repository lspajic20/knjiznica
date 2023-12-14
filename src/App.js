import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import LoginForm from './components/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/loginform" element={<LoginForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
