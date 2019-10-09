import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import UserState from './context/user/UserState';
import AuthState from './context/user/AuthState';

import './App.css';

// TODO: create an About page
const App = () => {
  return (
    <AuthState>
      <UserState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </UserState>
    </AuthState>
  );
};

export default App;
