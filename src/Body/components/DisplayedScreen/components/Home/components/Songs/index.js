import React, {useEffect} from 'react'
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './styles.css'

const Songs = () => {

    const dispatch = useDispatch();

    const playing = useSelector((state) => state.playing)
    const setPlaying = (payload) => dispatch({ type: Actions.SetPlaying, payload });

    const playingSong = useSelector((state) => state.playingSong)
    const setPlayingSong = (payload) => dispatch({ type: Actions.SetPlayingSong, payload });

    const playingSongName = useSelector((state) => state.playingSongName)
    const setPlayingSongName = (payload) => dispatch({ type: Actions.SetPlayingSongName, payload });

    const songs = useSelector((state) => state.songs)

    const originalSongs = useSelector((state) => state.originalSongs)

    const handleClick = () => {
        setPlaying(!playing)
    }

    const displayPlayButton = (song) => {
        if (playing && (song.filename == playingSongName)){
            return (

                    <PauseCircleFilledIcon onClick={() => handleClick()}/>

            )
        } else {
            return (

                    <PlayCircleFilledIcon onClick={() => handleClick()}/>

            )
        }
    }

    let i,array=[]

    for (i=0; i<Math.ceil(songs.length/5);i++) {
        array[i]=i
    }

    return (
        <div className="songs-area">
            <div className="text">
                Good Afternoon
            </div>
            {array.map(i => {
                return (
                    <div className="song-row">
                        {originalSongs.slice(5*i,5*(i+1)).map(item=> {
                            let audio = new Audio(`/songs/mp3/${item.filename}`);
                            return(
                                <div className="song" onClick={() => {
                                    if (!playing) {
                                        setPlayingSong(audio)
                                        setPlayingSongName(item.filename)
                                        setPlaying(true)
                                    }
                                }}>
                                    <div className="details">
                                        <img src={`songs/thumbnails/${item.thumbnail}`} />
                                        <div className="text">
                                            {item.title}
                                        </div>
                                    </div>
                                    {displayPlayButton(item)}
                                </div>
                        )})}
                    </div>
                )
            })}
        </div>
    )
}

export default Songs
