import React from 'react';
import {NavLink} from 'react-router-dom';

/* custom component imports */
import { Dashboard, Visits, Members, Settings } from '../icons/Icons';

const Navigation = () => {
  return (
    <nav className="nav--main">
      <NavLink className="nav__link--icon" to="/dashboard">
        <span className="text--hidden">Dashboard</span>
        <Dashboard />
      </NavLink>
      <NavLink className="nav__link--icon" to="/members"  >
        <span className="text--hidden">Members</span>
        <Members />
      </NavLink>
      <NavLink className="nav__link--icon" to="/visits"   >
        <span className="text--hidden">Visits</span>
        <Visits />
      </NavLink>
      <NavLink className="nav__link--icon" to="/settings" >
        <span className="text--hidden">Settings</span>
        <Settings />
      </NavLink>      
    </nav>
  );
}

export default Navigation;