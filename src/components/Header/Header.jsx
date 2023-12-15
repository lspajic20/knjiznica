import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
  const location = useLocation();

  // Provjeravamo da li se nalazimo na Home stranici
  const isHome = location.pathname === '/home';

  return (
    <header className="header">
      <div className="header__inner">
        <a href="index.html" className="header__logo-link">
          {/* Tu ide logo */}
        </a>
        <div className="header__nav">
          {isHome && (
          <Link to="/" className="header__logout-link">Odjava</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
