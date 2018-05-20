import React from 'react';
import avatar from '../../images/Randy-Portrait.jpg';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img className="img--avatar" src={avatar} />
      <h3 className="headline--lt">Randy Layne</h3>
    </div>
  );
}

export default UserProfile;