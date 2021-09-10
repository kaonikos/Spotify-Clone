import React from 'react'
import {SongDetails,Player,Settings} from './components'
import './styles.css'

const CurrentlyPlayingBar = () => {

    return (
        <div className="bottom-bar-area">
            <div className="divider">
            </div>
            <div className="bottom-bar">
                <SongDetails/>
                <Player/>
                <Settings/>
            </div>
        </div>
    )
}

export default CurrentlyPlayingBar
