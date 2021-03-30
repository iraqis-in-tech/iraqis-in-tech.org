import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header-container">
        <img src={logo} className="Header-logo" alt="logo" />
    
      <div className="Header-title">
        Iraqis In Tech
      </div>

      <div className="Header-arabic-toggle">
        [Togg]
      </div>
    </div>
  );
}

export default Header;
