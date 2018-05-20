import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav--graph">
      <NavLink className="nav__link--pill-bar" to="/dashboard/hourly" >
        Hourly
      </NavLink>
      <NavLink className="nav__link--pill-bar" to="/dashboard/daily" >
        Daily
      </NavLink>
      <NavLink className="nav__link--pill-bar" to="/dashboard/weekly" >
        Weekly
      </NavLink>
      <NavLink className="nav__link--pill-bar" to="/dashboard/monthly" >
        Monthly
      </NavLink>
    </nav>
  );
}

export default Navigation;