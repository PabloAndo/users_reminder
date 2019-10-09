import { ADD_USER, DELETE_USER, FILTER_USERS, CLEAR_FILTER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    // TODO: maybe include username and email
    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, 'gi'); // global and insensitive (match even is Uppercase or Lowercase)
          return user.username.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
