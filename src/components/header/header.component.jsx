import React from 'react';
import Navigation from '../navigation/navigation.component';
import Link from 'react-router-dom';
import './header.style.scss';
import logo from '../../assets/logo.png';
import { ReactComponent as LogoSVG } from '../../assets/smart-4.svg';

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} width="150px" />
    </div>
    <Navigation />
  </div>
);

export default Header;
