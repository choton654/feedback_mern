import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const auth = useSelector((state) => state.auth);

  const rendercontent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Login With Google</a>;
      default:
        return <a>Logout</a>;
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className='left brand-logo'>
          Emaily
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>{rendercontent()}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
