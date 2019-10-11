import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import style from './Navbar.module.scss';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user } = authContext;

  const authLinks = (
    <Fragment>
      <li>Hello {user}</li>
      <li>
        <Link to='/logout'>Logout</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  );

  return (
    // navbar bg-primary
    <div className={style.Navbar}>
      <h1>
        <ion-icon name='contacts'></ion-icon>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

// TODO: include icon
Navbar.defaultProps = {
  title: 'Users Reminder',
  icon: ''
};

export default Navbar;
