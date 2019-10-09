import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import UserState from './context/user/UserState';

import './App.css';

// TODO: create an About page
const App = () => {
  return (
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
  );
};

export default App;
