import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';

const Logout = props => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { logout, isAuthenticated } = authContext;
  const { clearUsers } = userContext;

  useEffect(() => {
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
        <span className='text-primary'>Logout</span> from your account
      </h1>
      <button className='btn btn-primary btn-block' onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
