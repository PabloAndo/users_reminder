import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USERS, DELETE_USER, FILTER_USERS, CLEAR_USERS, CLEAR_FILTER, USER_ERROR } from '../types';
import axios from 'axios';

const UserState = props => {
  const initialState = {
    users: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get Users
  const getUsers = async () => {
    try {
      const res = await axios.get('http://51.38.51.187:3333/api/v1/users');

      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR
      });
    }
  };

  
  const deleteUser = async id => {
    try {
      await axios.delete(`http://51.38.51.187:3333/api/v1/users/${id}`);

      dispatch({
        type: DELETE_USER,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.message
      });
    }
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const filterUsers = text => {
    dispatch({ type: FILTER_USERS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        getUsers,
        deleteUser,
        filtered: state.filtered,
        filterUsers,
        clearFilter,
        clearUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
