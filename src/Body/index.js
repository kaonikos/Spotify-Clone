import React from 'react'
import {DisplayedScreen,SideBarMenu,CurrentlyPlayingBar} from './components'
import './styles.css'

const Body = () => {

    return (
        <div className="body">
            <CurrentlyPlayingBar/>
            <SideBarMenu/>
            <DisplayedScreen/>
        </div>
    )

}

export default Body
