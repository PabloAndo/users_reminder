import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import PasswordValidator from 'password-validator';

const SignUp = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

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

  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const { username, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const schema = new PasswordValidator();

  schema
    .is()
    .min(6)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .has()
    .not()
    .spaces();

  const onSubmit = e => {
    e.preventDefault();
    const errors = schema.validate(password, { list: true });
    if (username === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (errors !== 0) {
      errors.forEach(error => {
        switch (error) {
          case 'min':
            setAlert('Password is too short - should be 6 chars minimum.', 'danger');
            break;
          case 'uppercase':
            setAlert('Password must contain 1 uppercase char.', 'danger');
            break;
          case 'lowercase':
            setAlert('Password must contain 1 lowercase char.', 'danger');
            break;
          case 'digits':
            setAlert('Password must contain a number.', 'danger');
            break;
          case 'spaces':
            setAlert('Password must not contain empty spaces.', 'danger');
            break;
          default:
            setAlert('Invalid password', 'danger');
            break;
        }
      });
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        username,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <div className='form-tittle'>
        <ion-icon name='person' size='large'></ion-icon> Sign Up
      </div>
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
        <input type='submit' value='Sign Up' className='btn btn--primary btn--block' />
      </form>
    </div>
  );
};

export default SignUp;
