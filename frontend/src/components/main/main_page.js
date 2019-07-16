// src/components/main/main_page.js
import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import NasaIOTD from '../widgets/nasa_iotd_container'
import SideBar from '../sidebar/sidebar'
import {connect} from 'react-redux'


import LoginContainer from '../session/login_form_container'

import { dispatchTurnOff, dispatchTurnOn} from '../../actions/ui_actions'

const mstp=(state,ownProps)=>({
  modal: state.ui.modal

})

const mdtp = (dispatch) =>({
  modalOn : ()=>dispatch(dispatchTurnOn()),
  modalOff : ()=>dispatch(dispatchTurnOff())

})


class MainPage extends React.Component {


  render() {
    const overlay = this.props.modal ==="on"? 
        <div className='overlay' > 
          <div className="overlay--ClickGrabber"  onClick={()=>this.props.modalOff()} ></div>
          <LoginContainer/>
        </div> : ""

    console.log(this.props, "thsi is the propss of mainpage")
    return (
      <div className="MainPage">
        {overlay}



        <NavBarContainer />
        <div className ="MainPage--Body">
          <div className="MainPage--SideBar">
            <SideBar/>
          </div>
          <div className="MainPage--Widgets">
            this hsould be here?
               <NasaIOTD />
               <button onClick={()=>this.props.modalOn()}> modal on</button>
          </div> 
        </div>


  

      </div>
    );
  }
}

export default connect(mstp,mdtp)(MainPage);