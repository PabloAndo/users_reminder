import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  // TODO: Improve this
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Username or password is incorrect') {
      setAlert(error, 'danger');
      clearErrors();
    }

    if (error === 'Username was not found') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // TODO: maybe include username and email, and validate password
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        username,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>User name (email)</label>
          <input type='email' name='username' value={username} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={onChange} required />
        </div>
        <input type='submit' value='Login' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Login;
