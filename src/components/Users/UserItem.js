import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/user/userContext';

const UserItem = ({ user }) => {
  const userContext = useContext(UserContext);
  const { deleteUser } = userContext;

  const { id, username } = user;

  const onDelete = () => {
    deleteUser(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{username}</h3>
      <p>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
