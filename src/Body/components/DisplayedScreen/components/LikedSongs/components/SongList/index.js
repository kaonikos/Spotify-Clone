import React from 'react'
import duration from '../../../../../../../media/images/duration.svg'
import greenHeart from '../../../../../../../media/images/greenHeart.svg'
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const SongList = () => {

    const dispatch = useDispatch();

    const originalSongs = useSelector((state) => state.originalSongs)

    const playing = useSelector((state) => state.playing)
    const setPlaying = (payload) => dispatch({ type: Actions.SetPlaying, payload });

    const songs = useSelector((state) => state.songs)
    const setSongs = (payload) => dispatch({ type: Actions.SetSongs, payload });

    const favourites = useSelector((state) => state.favourites)
    const setFavourites = (payload) => dispatch({ type: Actions.SetFavourites, payload });

    const playingSong = useSelector((state) => state.playingSong)
    const setPlayingSong = (payload) => dispatch({ type: Actions.SetPlayingSong, payload });

    const playingSongName = useSelector((state) => state.playingSongName)
    const setPlayingSongName = (payload) => dispatch({ type: Actions.SetPlayingSongName, payload });

    return(
        <div className='song-list-area'>
            <div className='labels-area'>
                <div className='labels'>
                    <div className='labels-inner-area'>
                        <p>#</p>
                        <p>TITLE</p>
                        <p>ARTIST</p>
                        <p>DATE ADDED</p>
                        <img src={duration} />
                    </div>
                </div>
                <div className='divider'>
                </div>
            </div>
            <div className='song-list'>
                {favourites.map(item => {
                    let audio = new Audio(`/songs/mp3/${originalSongs[item].filename}`);
                    console.log(audio.duration)
                    return (
                        <div className='song' onClick={() => {
                            if (!playing) {
                                setPlayingSong(audio)
                                setPlayingSongName(originalSongs[item].filename)
                                setPlaying(true)
                            }
                        }}>
                            <p>{favourites.indexOf(item)}</p>
                            <div className='details'>
                                <img src={`/songs/thumbnails/${originalSongs[item].thumbnail}`} />
                                <div className='text'>
                                    <p>{originalSongs[item].title}</p>
                                </div>
                            </div>
                            <p>{originalSongs[item].artist}</p>
                            <p id='space'></p>
                            <p>Date Added</p>
                            <div className='duration'>
                                <img src={greenHeart} />
                                <p>{audio.duration}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SongList