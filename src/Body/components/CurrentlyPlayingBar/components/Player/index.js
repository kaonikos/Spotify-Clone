import React from 'react'
import { Buttons,Bar } from './components'
import {Actions} from '../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const Player = () => {

    const dispatch = useDispatch();

    const playingSong = useSelector((state) => state.playingSong)
    const setPlayingSong = (payload) => dispatch({ type: Actions.SetPlayingSong, payload });

    const playingSongName = useSelector((state) => state.playingSongName)
    const setPlayingSongName = (payload) => dispatch({ type: Actions.SetPlayingSongName, payload });

    return(
        <div className="player-area">
            <Buttons/>
            <Bar/>
        </div>
    )
}

export default Player
