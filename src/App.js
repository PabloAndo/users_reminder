import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import About from './components/pages/About';
import Alerts from './components/layout/Alerts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import UserState from './context/user/UserState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/AuthTokenHelper';

import './style/App.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <UserState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/logout' component={Logout} />
                  <Route exact path='/about' component={About} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </UserState>
    </AuthState>
  );
};

export default App;
