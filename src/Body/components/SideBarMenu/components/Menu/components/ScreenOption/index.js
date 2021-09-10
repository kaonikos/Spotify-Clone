import React from 'react'
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'
import ButtonBase from '@material-ui/core/ButtonBase';

const ScreenOption = (props) => {

    const dispatch = useDispatch();

    const screen = useSelector((state) => state.screen)
    const setScreen = (payload) => dispatch({ type: Actions.SetScreen, payload });

    return (
        <div className="screen-option">
            <ButtonBase>
            <div className="inner-area" onClick={() => setScreen(props.text)} style={{backgroundColor: screen == props.text ? "#282828" : "#121212"}}>
                <div className="icon">
                    <img src={props.image}/>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
            </ButtonBase>
        </div>
    )
}

export default ScreenOption
