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
      <div className='form-tittle u-margin-bottom-small'>
        <ion-icon name='log-out' size='large'></ion-icon> Logout
      </div>
      <button className='btn btn--primary btn--block' onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
