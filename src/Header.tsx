import logo from './logo.svg';
import './Header.css';
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import React, { ChangeEventHandler } from 'react'

class Header extends React.Component {
  handleLanguageChange: ChangeEventHandler<HTMLInputElement> | undefined;

  state = {
    arabic: false
  };

  render() {
    return (
      <div className="Header-container">
        <img src={logo} className="Header-logo" alt="logo" />

        <div className="Header-title">
          Iraqis In Tech
      </div>

        <div className="Header-arabic-toggle">
          <div>{"Arabic"}</div>
        <Toggle 
          defaultChecked={this.state.arabic}
          onChange={this.handleLanguageChange} />
      </div>
      
      </div>
    );
  }
}

export default Header;
