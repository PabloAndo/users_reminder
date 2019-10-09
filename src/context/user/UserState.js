import React, { useReducer } from 'react';
import uuid from 'uuid';
import UserContext from './userContext';
import userReducer from './userReducer';
import { ADD_USER, DELETE_USER, FILTER_USERS, CLEAR_FILTER } from '../types';

const UserState = props => {
  const initialState = {
    users: [
      {
        id: 1,
        username: 'pablo'
      },
      {
        id: 2,
        username: 'pedro'
      },
      {
        id: 3,
        username: 'sara'
      }
    ],
    filtered: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // TODO: Add Contact

  const deleteUser = id => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  const filterUsers = text => {
    dispatch({ type: FILTER_USERS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <UserContext.Provider
      value={{ users: state.users, deleteUser, filtered: state.filtered, filterUsers, clearFilter }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
