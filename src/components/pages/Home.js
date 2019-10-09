import React from 'react';
import Users from '../Users/Users';
import UserFilter from '../Users/UserFilter';

const Home = () => {
  return (
    <div>
      <UserFilter />
      <Users />
    </div>
  );
};

export default Home;
