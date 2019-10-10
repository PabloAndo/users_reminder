import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';

const Logout = props => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { logout, isAuthenticated } = authContext;
  const { clearUsers } = userContext;

  useEffect(() => {
    // if (isAuthenticated) {
    //   props.history.push('/');
    // }
    authContext.loadUser();
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const onLogout = () => {
    logout();
    clearUsers();
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <a onClick={onLogout} href='#!'>
        <ion-icon name='log-out'></ion-icon> <span className='hide-sm'>Logout</span>
      </a>
    </div>
  );
};

export default Logout;
