import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  const { id, username } = user;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{username}</h3>
      <p>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

UserItem.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserItem;
