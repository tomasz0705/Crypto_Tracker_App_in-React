import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">CryptoTrackerApp</Link>
        <nav>
          <ul className="header__nav">
            <li className="nav__element">
              <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__element">
              <Link to="/transactions" className="nav__link">Smthg Else</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;