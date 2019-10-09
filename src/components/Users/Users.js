import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../../context/user/userContext';

const Users = () => {
  const userContext = useContext(UserContext);

  const { users, filtered } = userContext;

  // TODO: maybe show a paragraph in case there is no Users included?
  // if (users.length == 0) {
  //   return <h4>Please add a user</h4>;
  // }

  // TODO: maybe include some transitions when deleting a user 'Transition Group'

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(user => <UserItem key={user.id} user={user} />)
        : users.map(user => <UserItem key={user.id} user={user} />)}
    </Fragment>
  );
};

export default Users;
