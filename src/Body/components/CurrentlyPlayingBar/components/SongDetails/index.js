import React from 'react'
import heartRed from '../../../../../media/images/heartRed.svg'
import heart from '../../../../../media/images/heart.svg'
import { useSelector, useDispatch } from 'react-redux'
import {Actions} from '../../../../../reducer/actions'
import './styles.css'

const SongDetails = () => {

    const dispatch = useDispatch();

    // const screen = useSelector((state) => state.screen)
    // const setScreen = (payload) => dispatch({ type: Actions.SetScreen, payload });

    const originalSongs = useSelector((state) => state.originalSongs)

    const playingSongName = useSelector((state) => state.playingSongName)
    const setPlayingSongName = (payload) => dispatch({ type: Actions.SetPlayingSongName, payload });

    const favourites = useSelector((state) => state.favourites)
    const setFavourites = (payload) => dispatch({ type: Actions.SetFavourites, payload });

    const displayImage = () => {
        return (
            <img id='cover'src={`/songs/thumbnails/${originalSongs.find(item => item.filename == playingSongName).thumbnail}`} />
        )
    }

    const displayText = () => {
        return (
            <div className="text">
                <p>{`${originalSongs.find(item => item.filename == playingSongName).title}`}</p>
                <p id="artist">{`${originalSongs.find(item => item.filename == playingSongName).artist}`}</p>
            </div>
        )
    }

    const addToFavourites = () => {
        setFavourites([...favourites,originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))])
    }

    const removeFromFavourites = () => {
        const index = favourites.indexOf(favourites.find(item => item == originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))) )
        favourites.splice(index, 1);
        setFavourites([...favourites])
    }

    const displayHeart = () => {
        if (favourites.find(item => item == originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))) >=0){
            return (
                <img src={heartRed} onClick={removeFromFavourites}/>
            )
        } else {
            return (
                <img src={heart} onClick={addToFavourites}/>
            )
        }
    }

    return(
        <div className="song-details-area">
            <div className="song-details">
                {displayImage()}
                {displayText()}
                {displayHeart()}
            </div>
        </div>
    )
}

export default SongDetails