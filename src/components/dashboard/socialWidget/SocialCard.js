import React from 'react';

import SocialWidget from './SocialWidget';
import {Facebook, Twitter, Google} from '../../icons/Icons'

const SocialCard = () => {
  return (
    <div className="card card--full" >
      <div className="flex-wrapper" >
          <h4 className="headline--med title">SOCIAL</h4>
      </div>
      <div className="social" >
        <SocialWidget title="Twitter"   stats="10,345" svg={Twitter}/>
        <SocialWidget title="Facebook"  stats="8,739" svg={Facebook} />
        <SocialWidget title="Google+"   stats="2,530" svg={Google} />
      </div>      
    </div>
  );
}

export default SocialCard;