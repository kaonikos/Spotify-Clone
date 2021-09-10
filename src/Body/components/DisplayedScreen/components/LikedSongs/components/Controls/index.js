import React from 'react'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import arrowDown from '../../../../../../../media/images/arrowDown.svg'
import smallArrowDown from '../../../../../../../media/images/smallArrowDown.svg'
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const Controls = () => {

    const dispatch = useDispatch();

    const playing = useSelector((state) => state.playing)
    const setPlaying = (payload) => dispatch({ type: Actions.SetPlaying, payload });

    const handleClick = () => {
        setPlaying(!playing)
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

    return(
        <div className='controls-area'>
            <div className='buttons'>
                {displayPlayingState()}
                <img src={arrowDown} />
            </div>
            <div className='controls'>
                <p>Custom order</p>
                <img src={smallArrowDown} />
            </div>
        </div>
    )
}

export default Controls