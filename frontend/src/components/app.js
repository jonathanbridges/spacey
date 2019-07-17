import React from 'react';

import { AuthRoute } from '../util/route_util';
import { Switch ,Route} from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


class App extends React.Component{
    constructor(props){
    super(props)

    this.state={
      modal: 'close'
    }
  }

  render(){
    return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={MainPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>)}

};

export default App;