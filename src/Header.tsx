import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header-container">
        <img src={logo} className="Header-logo" alt="logo" />
    
      <h3 className="Header-title">
        Iraqis In Tech
      </h3>

      <h3 className="Header-arabic-toggle">
        [Togg]
      </h3>
    </div>
  );
}

export default Header;
