import React, { useEffect, useState } from 'react'
import shuffle from '../../../../../../../media/images/shuffle.svg'
import shuffleGreen from '../../../../../../../media/images/shuffleGreen.svg'
import previousSong from '../../../../../../../media/images/previousSong.svg'
import nextSong from '../../../../../../../media/images/nextSong.svg'
import repeat from '../../../../../../../media/images/repeat.svg'
import repeatGreen from '../../../../../../../media/images/repeatGreen.svg'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const Buttons = () => {

    const dispatch = useDispatch();

    const playing = useSelector((state) => state.playing)
    const setPlaying = (payload) => dispatch({ type: Actions.SetPlaying, payload });

    const shuffleState = useSelector((state) => state.shuffleState)
    const setShuffleState = (payload) => dispatch({ type: Actions.SetShuffleState, payload });

    const repeatState = useSelector((state) => state.repeatState)
    const setRepeat = (payload) => dispatch({ type: Actions.SetRepeat, payload });

    const playingSong = useSelector((state) => state.playingSong)
    const setPlayingSong = (payload) => dispatch({ type: Actions.SetPlayingSong, payload });

    const playingSongName = useSelector((state) => state.playingSongName)
    const setPlayingSongName = (payload) => dispatch({ type: Actions.SetPlayingSongName, payload });

    const screen = useSelector((state) => state.screen)
    const setScreen = (payload) => dispatch({ type: Actions.SetScreen, payload });

    const originalSongs = useSelector((state) => state.originalSongs)

    const songs = useSelector((state) => state.songs)
    const setSongs = (payload) => dispatch({ type: Actions.SetSongs, payload });

    const favourites = useSelector((state) => state.favourites)
    const setFavourites = (payload) => dispatch({ type: Actions.SetFavourites, payload });

    const [value, setValue] = useState(0);

    let array1 = [],array2 = [],i

    for (i=0; i<originalSongs.length;i++) {
        array1[i]=i
    }
    for (i=0; i<favourites.length;i++) {
        array2[i]=favourites[i]
    }

    useEffect(
        () => {
            if (shuffleState){
                shuffleArray(songs)
            } else {
                songs.sort((a, b) => {
                    return a - b;
                  });
            }
        },[shuffleState]
    )

    useEffect(
        () => {
            switch(screen) {
                case 'Home':
                    setSongs(array1)
                    break;
                case 'Liked Songs':
                    setSongs(array2) 
                    setShuffleState(false)
                    setRepeat(false)
                    break
              }

        },[screen]
    )

    useEffect(
        () => {
            if (playing) {
                playingSong.play();
            }else {
                playingSong.pause();
            }
        },[playing]
    );
    console.log(songs,screen,playingSongName)

    const tick = () => {
        setValue(value+1)
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(),1000);
        return () => clearInterval(timerId);
    }
    );

    useEffect(
        () => {
            if (playingSong.ended) {
                nextTrack();
            }
            setValue(value+1)
        },[playingSong.ended]
    )
    
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      }

    const handleClick = () => {
        setPlaying(!playing)
    }

    const nextTrack = () => {
        const currentSongIndex = originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))
        if (currentSongIndex == songs[songs.length -1]) {
            if (repeatState) {
                if (shuffleState) {
                    shuffleArray(songs)
                }
                let audio = new Audio(`/songs/mp3/${originalSongs[songs[0]].filename}`);
                playingSong.pause();
                setPlayingSong(audio)
                setPlayingSongName(originalSongs[songs[0]].filename)
                if (playing) {
                    audio.play();
                }
            }
        } else {
            let audio = new Audio(`/songs/mp3/${originalSongs[songs[songs.indexOf(currentSongIndex)+1]].filename}`);
            playingSong.pause();
            setPlayingSong(audio)
            setPlayingSongName(originalSongs[songs[songs.indexOf(currentSongIndex)+1]].filename)
            if (playing) {
                audio.play();
            }
        }

    }

    const prevTrack = () => {
        const currentSongIndex = originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))
        if (currentSongIndex == songs[0]) {
            if (repeatState) {
                let audio = new Audio(`/songs/mp3/${originalSongs[songs[songs.length - 1]].filename}`);
                playingSong.pause();
                setPlayingSong(audio)
                setPlayingSongName(originalSongs[songs[songs.length - 1]].filename)
                if (playing) {
                    audio.play();
                }
            }
        } else {
            let audio = new Audio(`/songs/mp3/${originalSongs[songs[songs.indexOf(currentSongIndex) - 1]].filename}`);
            playingSong.pause();
            setPlayingSong(audio)
            setPlayingSongName(originalSongs[songs[songs.indexOf(currentSongIndex) - 1]].filename)
            if (playing) {
                audio.play();
            }
        }

    }

    const displayPlayingState = () => {
        if (playing){
            return (
                <PauseCircleFilledIcon onClick={() => handleClick()}/>
            )
        } else {
            return (
                <PlayCircleFilledIcon onClick={() => handleClick()}/>
            )
        }
    }

    const displayShuffle = () => {
        if (shuffleState){
            return (
                <img src={shuffleGreen} onClick={() => setShuffleState(!shuffleState)}/>
            )
        } else {
            return (
                <img src={shuffle} onClick={() => setShuffleState(!shuffleState)}/>
            )
        }
    }

    const displayRepeat = () => {
        if (repeatState){
            return (
                <img src={repeatGreen} onClick={() => setRepeat(!repeatState)}/>
            )
        } else {
            return (
                <img src={repeat} onClick={() => setRepeat(!repeatState)}/>
            )
        }
    }

    return (
        <div className="buttons-area">
            {displayShuffle()}
            <img src={previousSong} onClick={prevTrack}  style={(repeatState) ? {} : songs.indexOf(originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))) == 0 ? {opacity: '0.5'} : {opacity: '1'}}/>
            {displayPlayingState()}
            <img src={nextSong} onClick={nextTrack} style={(repeatState) ? {} : songs.indexOf(originalSongs.indexOf(originalSongs.find(item => item.filename == playingSongName))) == (songs.length -1) ? {opacity: '0.5'} : {opacity: '1'}}/>
            {displayRepeat()}
        </div>
    )
}

export default Buttons
