import React from 'react';

import { AuthRoute } from '../util/route_util';
import { Switch ,Route} from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import axios from 'axios';

import NasaIOTD from './widgets/nasa_iotd_container'


class App extends React.Component{
    constructor(props){
    super(props)

    this.state={
      modal: 'close' 
    }
  }
/* modal stuff
        <button onClick={()=>this.setState({modal:'open'})}>this is a button</button>

      <div className={`overlay${ this.state.modal==='open'?"--open" :""}`} onClick={()=>this.setState({modal: 'close'})}>
        <div className={`modal${ this.state.modal==='open'?"--open" :""}`}>
          <h3>this is stuff</h3>
          <p>mosdlj fasdjkfasd fasdj;l fasdjkl;fadsre stuff</p>
        </div>
      </div>
      */

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