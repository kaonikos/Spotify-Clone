import React from 'react'
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const SongOption = (props) => {

    const dispatch = useDispatch();

    const screen = useSelector((state) => state.screen)
    const setScreen = (payload) => dispatch({ type: Actions.SetScreen, payload });

    return (
        <div className="song-option">
            <div className="inner-area" onClick={() => setScreen(props.text)}>
                <div className="icon">
                    <img src={props.image}/>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default SongOption
