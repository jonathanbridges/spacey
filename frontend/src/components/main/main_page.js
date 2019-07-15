// src/components/main/main_page.js

import React from 'react';
import NavBarContainer from '../nav/navbar_container';

class MainPage extends React.Component {


  render() {
    return (
      <div className="MainPage">



        <NavBarContainer />
        <div className ="MainPage--Body">
          <div className="MainPage--SideBar">
            sidebara
          </div>
          <div className="MainPage--Widgets">
            stuff here
          </div> 
        </div>


  

      </div>
    );
  }
}

export default MainPage;