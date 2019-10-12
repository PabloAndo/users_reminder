import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/user/userContext';

const UserItem = ({ user }) => {
  const userContext = useContext(UserContext);
  const { deleteUser } = userContext;

  const { _id, username } = user;

  const onDelete = () => {
    deleteUser(_id);
  };

  return (
    <div className='user-card bg-light'>
      <h3 className='text-primary text-left'>{username}</h3>
      <p>
        <button className='btn btn--danger btn--small' onClick={onDelete}>
          <div className='user-delete-btn'>
            <ion-icon name='trash'></ion-icon>
            <span>Delete</span>
          </div>
        </button>
      </p>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
