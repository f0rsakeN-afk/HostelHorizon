import React from 'react';
import { NavLink } from 'react-router-dom';

function Navlink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="justify-left flex items-center gap-2 transition-colors duration-100
ease-linear hover:text-[#936ce0]
aria-[current=page]:text-[#ff0336] "
    >
      {children}
    </NavLink>
  );
}

export default Navlink;
