import React, { useState } from 'react';

const SignUp = () => {
  // TODO: maybe include username and email, and validate password
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.username]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Sign Up Submit');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='from-group'>
          <label htmlFor='email'>User name (email)</label>
          <input type='email' name='mail' value={username} onChange={onChange} />
        </div>
        <div className='from-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} />
        </div>
        <input type='submit' value='Sign Up' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default SignUp;
