import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearUsers } = userContext;

  const onLogout = () => {
    logout();
    clearUsers();
  };

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
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
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
