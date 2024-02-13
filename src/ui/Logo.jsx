import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <NavLink to='/'>
        <img src='https://afjxfgpwdqxbmrurwtkh.supabase.co/storage/v1/object/public/logo/logo.webp' alt="logo-image" className="h-24" />
      </NavLink>
    </div>
  );
};

export default Logo;
