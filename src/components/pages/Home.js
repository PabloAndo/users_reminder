import React, { useContext, useEffect } from 'react';
import Users from '../users/Users';
import UserFilter from '../users/UserFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-container'>
      <h1>Users who signed up:</h1>
      <UserFilter />
      <Users />
    </div>
  );
};

export default Home;
