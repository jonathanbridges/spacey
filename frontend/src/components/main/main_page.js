// src/components/main/main_page.js
import React from 'react';
import {connect} from 'react-redux';

import { dispatchTurnOff, dispatchTurnOn } from '../../actions/ui_actions';

import LoginContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

import NavBar from '../nav/navbar_container';
import SideBar from '../sidebar/sidebar';

import HubbleNews from '../widgets/hubble_news_container';
import NasaIOTD from '../widgets/nasa_iotd_container';
import RoverPhotos from '../widgets/rover_images_container';
import SpaceLaunchNews from '../widgets/space_launch_news_container';
import TwitterFeed from '../widgets/twitter_feed_container';


const mstp=(state,ownProps)=>({
  modal: state.ui.modal
})

const mdtp = (dispatch) =>({
  modalOn : (modal)=>dispatch(dispatchTurnOn(modal)),
  modalOff : ()=>dispatch(dispatchTurnOff())
})


class MainPage extends React.Component {

  render() {
    let overlay = ""
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
        <NavBar />
        <div className="MainPage--Body">
          <div className="MainPage--SideBar">
            <SideBar />
          </div>
          <div className="MainPage--Widgets">
            <div className="top-widgets">
              <NasaIOTD />
              <HubbleNews />
              <SpaceLaunchNews />
              <TwitterFeed />
            </div>
            <RoverPhotos />
          </div>
          <div className="stars" />
          <div className="twinkling" />
          <div className="clouds" />
          <div className="night">
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
            <div className="shooting_star" />
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mstp,mdtp)(MainPage);
