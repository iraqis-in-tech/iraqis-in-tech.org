import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header-Container">
     <img src={logo} alt="logo" />
      <header className="Header-Text">
        <p>
          Iraqis In Tech (IIT)
        </p>
      </header>
      <header>
        <p>
         Arabic
        </p>
      </header>
    </div>
  );
}

export default Header;
