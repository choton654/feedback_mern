import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions';
import Navbar from './Navbar';

function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <>{children()}</>
    </div>
  );
}

export default Layout;
