import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <NavLink to='/'>
        <img src={logo} alt="logo-image" className="h-24" />
      </NavLink>
    </div>
  );
};

export default Logo;
