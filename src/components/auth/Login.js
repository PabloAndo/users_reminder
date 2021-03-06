import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

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
      <div className='form-tittle'>
        <ion-icon name='log-in' size='large'></ion-icon> Login
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>User name (email)</label>
          <input type='email' name='username' value={username} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={onChange} required />
        </div>
        <input type='submit' value='Login' className='btn btn--primary btn--block' />
      </form>
    </div>
  );
};

export default Login;
