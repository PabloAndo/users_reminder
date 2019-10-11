import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const SignUp = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  // TODO: Improve this
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Username already in use') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // TODO: maybe include username and email, and validate password
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const { username, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        username,
        password
      });
    }
  };

  // TODO: minLength of password to 6 for example?
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Sign Up</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>User name (email)</label>
          <input type='email' name='username' value={username} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm password</label>
          <input type='password' name='password2' value={password2} onChange={onChange} />
        </div>
        <input type='submit' value='Sign Up' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default SignUp;
