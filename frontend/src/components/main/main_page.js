// src/components/main/main_page.js

import React from 'react';
import NavBarContainer from '../nav/navbar_container';

class MainPage extends React.Component {
  constructor(props){
    super(props)

    this.state={
      modal: 'close' 
    }
  }


  render() {
    console.log('htis is bmodal', this.state.modal)
    return (
      <div className="MainPage">



        <NavBarContainer />
        <div className ="MainPage--Body">
          <div className="MainPage--SideBar">
            sidebara
          </div>
          <div className="MainPage--Widgets">
            stuff here
            <button onClick={()=>this.setState({modal:'open'})}>this is a button</button>
          </div> 
        </div>


        <div className={`overlay${ this.state.modal==='open'?"--open" :""}`} onClick={()=>this.setState({modal: 'close'})}>
          <div className={`modal${ this.state.modal==='open'?"--open" :""}`}>
            <h3>this is stuff</h3>
            <p>mosdlj fasdjkfasd fasdj;l fasdjkl;fadsre stuff</p>
          </div>
        </div>


      </div>
    );
  }
}

export default MainPage;