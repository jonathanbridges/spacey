// src/components/main/main_page.js
import React from 'react';

import NavBarContainer from '../nav/navbar_container';
import NasaIOTD from '../widgets/nasa_iotd_container'
import News from '../widgets/all_news';
import RoverPhotos from '../widgets/rover_images_container'

import SideBar from '../sidebar/sidebar'
import {connect} from 'react-redux'

import LoginContainer from '../session/login_form_container'
import SignUpContainer from '../session/signup_form_container'

import { dispatchTurnOff, dispatchTurnOn} from '../../actions/ui_actions'

const mstp=(state,ownProps)=>({
  modal: state.ui.modal

})

const mdtp = (dispatch) =>({
  modalOn : (modal)=>dispatch(dispatchTurnOn(modal)),
  modalOff : ()=>dispatch(dispatchTurnOff())

})


class MainPage extends React.Component {


  render() {
    let overlay  = ""
    if( this.props.modal!=='off'){
      if(this.props.modal==='signUp'){
       overlay= (<div className='overlay' >
          <div className="overlay--ClickGrabber"  onClick={()=>this.props.modalOff()} ></div>
          <SignUpContainer/>
       </div> )

      }else if( this.props.modal ==='login'){
       overlay= (<div className='overlay' >
          <div className="overlay--ClickGrabber"  onClick={()=>this.props.modalOff()} ></div>
          <LoginContainer/>
       </div> )

      }
    }


    return (
      <div className="MainPage">
        {overlay}
        <NavBarContainer />
        <div className ="MainPage--Body">
          <div className="MainPage--SideBar">
            <SideBar/>
          </div>
          <div className="MainPage--Widgets">
            <div className="top-widgets">
              <NasaIOTD />
              <News />
            </div>
            <RoverPhotos />
          </div>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div className="night">
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
            <div class="shooting_star"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mstp,mdtp)(MainPage);