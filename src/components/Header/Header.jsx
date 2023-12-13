import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Vaš sadržaj zaglavlja */}
        <a href="index.html" className="header__logo-link">
          {/* Tu ide logo */}
        </a>

        <nav className="header__nav">
          <a href="index.html" className="header__link">Početna</a>
          <a href="Registracija" className="header__link">Registracija</a>
          <a href="Prijava" className="header__link">Prijava</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
