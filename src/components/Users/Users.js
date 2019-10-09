import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../../context/user/userContext';

const Users = () => {
  const userContext = useContext(UserContext);

  const { users, filtered } = userContext;

  // TODO: maybe show a paragraph in case there is no Users included?
  // if (users.length == 0) {
  //   return <h4>Pleaes add a user</h4>;
  // }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(user => <UserItem key={user.id} user={user} />)
        : users.map(user => <UserItem key={user.id} user={user} />)}
    </Fragment>
  );
};

export default Users;
