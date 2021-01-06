import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from './context/authentication/authContext';

const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const authLinks = (
    <Fragment>
      <li> {user && user.user.email}</li>
      <li>
        <a href='#!'>
          <i className='fas fa-sign-out-alt'>
            <span className='hide-sm'>Logout</span>
          </i>
        </a>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fas fa-id-card-alt' /> Contacts
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

export default Navbar;
