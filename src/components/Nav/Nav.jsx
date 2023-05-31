import React from 'react';
import './Nav.css';
import { useSelector } from 'react-redux';
import backgroundImage from '../Images/5060ad15984148488c0a41d6075fbff2.png'; 

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div className="navLink">
      </div>
    </div>
  );
}

export default Nav;
