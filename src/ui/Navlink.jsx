import React from 'react';
import { NavLink } from 'react-router-dom';

function Navlink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="justify-left aria-[current=page]:text-[#ff0336] flex items-center gap-2 transition-colors
duration-300 ease-linear
hover:text-[#936ce0] "
    >
      {children}
    </NavLink>
  );
}

export default Navlink;
