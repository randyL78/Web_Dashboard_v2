import React from 'react';

/* custom component imports */
import {Bell} from '../icons/Icons';

const Header = () => {
  return (
  <header className="header">
    <h1 className="headline--lt header__headline">Your <span className="headline--skinny">App<sup>tm</sup></span></h1>
    <div className="header__informtion" >
      <Bell />
    </div>
  </header>
  );
}

export default Header