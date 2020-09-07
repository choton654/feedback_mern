import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import Payments from './Payments';

function Navbar() {
  const auth = useSelector((state) => state.auth);

  const rendercontent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <>
            <li key='1'>
              <Payments />
            </li>
            <li key='3' style={{ margin: '0 10px' }}>
              Credits: {auth.credits}
            </li>
            <li key='2'>
              <a href='/api/logout'>Logout</a>
            </li>
          </>,
        ];
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link href={auth ? '/dashboard' : '/'}>
          <a className='left brand-logo'>Emaily</a>
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {rendercontent()}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
