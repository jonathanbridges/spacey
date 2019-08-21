import React from 'react'
import SideBarButtonContainer from './buttons/button'

const SideBar = ()=>{
    return (
        <div className="SideBarToggles">
            <SideBarButtonContainer widget="nasaIotd" title="Nasa Image of the Day" />
            <SideBarButtonContainer widget="twitterFeed" title="Twitter Feed" />
            <SideBarButtonContainer widget="spaceLaunchnews" title="Space Launch News" />
            <SideBarButtonContainer widget="hubbleNews" title="Hubble News" />
            <SideBarButtonContainer widget="roverPhotos" title="Rover Photos" />
        </div>
    );
}

export default SideBar