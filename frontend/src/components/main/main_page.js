// src/components/main/main_page.js

import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import NasaIOTD from '../widgets/nasa_iotd_container'
import SideBar from '../sidebar/sidebar'

class MainPage extends React.Component {


  render() {
    return (
      <div className="MainPage">



        <NavBarContainer />
        <div className ="MainPage--Body">
          <div className="MainPage--SideBar">
            <SideBar/>
          </div>
          <div className="MainPage--Widgets">
               <NasaIOTD />
          </div> 
        </div>


  

      </div>
    );
  }
}

export default MainPage;