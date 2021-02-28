import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div>
     <img src={logo} alt="logo" />
      <header>
        <p>
          Iraqis In Tech
        </p>
      </header>
    </div>
  );
}

export default Header;
