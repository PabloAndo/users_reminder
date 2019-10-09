import React, { useReducer } from 'react';
import uuid from 'uuid';
import UserContext from './userContext';
import userReducer from './userReducer';
import { ADD_USER, DELETE_USER } from '../types';

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
    ]
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // TODO: Add Contact

  // TODO: Delete Contact
  const deleteUser = id => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  return (
    <UserContext.Provider value={{ users: state.users, deleteUser }}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
