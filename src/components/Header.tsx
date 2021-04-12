import logo from '../logo.svg';
import './Header.css';
import Toggle from 'react-toggle'
import "react-toggle/style.css"


import React, { useCallback, useState, useEffect, useRef, FC, ChangeEvent } from 'react'
import { RootState } from '../store'
import { setLanguage } from '../store/actions/langActions'
import { translate } from '../i18n'
import { useDispatch, useSelector } from 'react-redux'

interface HeaderProps {
  fixed?: boolean
  transparent?: boolean;
}

const Header: FC<HeaderProps> = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();

  const chooseLanguageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLanguage(e.target.checked ? "AR" : "EN"))

  }

  return (
    <div className="Header-container">
      <img src={logo} className="Header-logo" alt="logo" />

      <div className="Header-title">
        {translate('site-title', language)}
      </div>

      <div className="Header-arabic-toggle">
        <div>{"Arabic"}</div>
        <Toggle
          defaultChecked={false}
          onChange={chooseLanguageHandler} />
      </div>

    </div>
  );
}

export default Header;

