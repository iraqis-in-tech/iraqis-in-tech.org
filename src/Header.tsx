import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header-container">
     <img src={logo} alt="logo" />
      <h3 className="Header-title">
        Iraqis In Tech (IIT)
      </h3>
      <h3 className="Header-arabic-toggle">
       Arabic
      </h3>
    </div>
  );
}

export default Header;
