import { GET_USERS, DELETE_USER, FILTER_USERS, CLEAR_FILTER, USER_ERROR, CLEAR_USERS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload),
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: null,
        filtered: null,
        error: null
      };

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
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
