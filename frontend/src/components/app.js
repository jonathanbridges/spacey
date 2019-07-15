// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import axios from 'axios';

import NasaIOTD from './widgets/nasa_iotd_container'

// import {fetchImageOfTheDay} from '../util/nasa_iotd_util'
// import {fetchImageOfTheDay} from '../actions/nasa_iotd_actions'

// start testing
// asios call working
  // window.fetchImageOfTheDay = fetchImageOfTheDay;
// end testing

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
          <AuthRoute exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <NasaIOTD />
    </div>
  )
};

export default App;