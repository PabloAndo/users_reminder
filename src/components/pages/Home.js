import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Users from '../users/users';
import UserFilter from '../users/UserFilter';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-container'>
      <h1>Signed Up Users:</h1>
      <UserFilter />
      <Users />
    </div>
  );
};

export default Home;
