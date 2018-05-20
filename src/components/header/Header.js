import React from 'react';

/* custom component imports */
import {Bell} from '../icons/Icons';
import UserProfile from './UserProfile';

const Header = () => {
  return (
  <header className="header">
    <h1 className="headline--lt header__headline">Your <span className="headline--skinny">App<sup>tm</sup></span></h1>
    <div className="header__information" >
      <div className="svg-wrapper--success" >
        <Bell />
      </div>
      <UserProfile />
    </div>
  </header>
  );
}

export default Header