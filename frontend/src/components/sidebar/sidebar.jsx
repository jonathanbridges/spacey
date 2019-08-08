import React from 'react'
import SideBarHeader from './sidebar_header'
import NasaIotdButtonContainer from './nasaiotdbutton/nasaiotd_button'

const SideBar = ()=>{
    return [
        <SideBarHeader />,
        <div className="SideBarToggles">
            <NasaIotdButtonContainer />
        </div>
    ];
}

export default SideBar