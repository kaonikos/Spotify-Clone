import React from 'react'
import arrowBack from '../../../../../../../media/images/arrowBack.svg'
import arrowNext from '../../../../../../../media/images/arrowNext.svg'
import bigHeart from '../../../../../../../media/images/bigHeart.svg'
import './styles.css'

const Logo = () => {

    return (
        <div className='logo-area'>
            <div className='buttons'>
                <img src={arrowBack} />
                <img src={arrowNext} />
            </div>
            <div className='image-and-text-area'>
                <div className='image-and-text'>
                    <div className='image'>
                        <img src={bigHeart} />
                    </div>
                    <div className='text'>
                        <p id='playlist'>Playlist</p>
                        <p id='title'>Liked Songs</p>
                        <p id='name'>kwstas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo