import React from 'react'
import {ScreenOption,SongOption} from './components'
import house from '../../../../../media/images/house.svg'
import search from '../../../../../media/images/search.svg'
import folder from '../../../../../media/images/folder.svg'
import addSong from '../../../../../media/images/addSong.svg'
import favourite from '../../../../../media/images/favourite.svg'
import './styles.css'

const Menu = () => {

    return (
        <div className="menu">
            <div className="screen-options">
                <ScreenOption image={house} text={"Home"}/>
                <ScreenOption image={search} text={"Search"}/>
                <ScreenOption image={folder} text={"Library"}/>
            </div>
            <div className="song-options">
                <SongOption image={addSong} text={"Create Playlist"}/>
                <SongOption image={favourite} text={"Liked Songs"} />
            </div>
        </div>
    )
}

export default Menu
