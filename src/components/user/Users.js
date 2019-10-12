import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import UserItem from './UserItem';
import UserContext from '../../context/user/userContext';
import Spinner from '../layout/Spinner';

const Users = () => {
  const userContext = useContext(UserContext);

  const { users, filtered, getUsers, loading } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if (users !== null && users.length === 0 && !loading) {
    return <h4>Please add a user</h4>;
  }

  return (
    <Fragment>
      {users !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(user => (
                <CSSTransition key={user._id} timeout={300} classNames='item'>
                  <UserItem user={user} />
                </CSSTransition>
              ))
            : users.map(user => (
                <CSSTransition key={user._id} timeout={300} classNames='item'>
                  <UserItem user={user} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Users;
