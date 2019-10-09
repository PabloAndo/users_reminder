import React, { useContext, useEffect } from 'react';
import Users from '../Users/Users';
import UserFilter from '../Users/UserFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <UserFilter />
      <Users />
    </div>
  );
};

export default Home;
