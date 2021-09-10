import React from 'react'
import {Logo,Menu} from './components'
import './styles.css'

const SideBarMenu = () => {

    return (
        <div className="side-bar">
            <div className="side-bar-menu">
                <Logo/>
                <Menu/>
                <div className="divider-area">
                    <div className="divider">
                    </div>
                </div>
                <div className="playlists">
                    My playlist 1
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu
