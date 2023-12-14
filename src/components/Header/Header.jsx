import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="index.html" className="header__logo-link">
          {/* Tu ide logo */}
        </a>

        <nav className="header__nav">
          <Link to="/" className="header__link">Početna</Link>
          <Link to="/registration" className="header__link">Registracija</Link>
          <Link to="/loginform" className="header__link">Prijava</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
