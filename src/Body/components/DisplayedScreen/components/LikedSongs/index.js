import React from 'react'
import {Logo,Controls,SongList} from './components'
import './styles.css'

const LikedSongs = () => {

    return (
        <div className='liked-songs-area'>
            <div className='liked-songs'>
                <Logo/>
                <Controls/>
                <SongList/>
            </div>
        </div>
    )
}

export default LikedSongs