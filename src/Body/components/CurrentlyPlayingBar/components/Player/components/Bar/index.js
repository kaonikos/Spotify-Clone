import React, {useState,useEffect} from 'react'
import Slider from '@material-ui/core/Slider';
import {Actions} from '../../../../../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

const Bar = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    const playingSong = useSelector((state) => state.playingSong) 

    const handleChange = (event, newValue) => {
            setValue(newValue);
            playingSong.currentTime = newValue
    };

    useEffect(
        () => {
            setValue(playingSong.currentTime)
        },[playingSong.currentTime]
    )

    const tick = () => {
        setValue(value+1)
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    if (playingSong.duration) {
        var time = new Date(null);
        Math.ceil(playingSong.currentTime)
        time.setSeconds(playingSong.currentTime); 
        var displayedTime = time.toISOString().substr(14, 5);
    
        var maxValue = new Date(null);
        Math.floor(playingSong.duration)
        maxValue.setSeconds(playingSong.duration); 
        var displayedDuration = maxValue.toISOString().substr(14, 5);

        return (
            <div className="bar">
                <div className="text">
                    {displayedTime}
                </div>
                <Slider value={playingSong.currentTime} min={0} max={playingSong.duration} onChange={handleChange} aria-labelledby="continuous-slider"/>
                <div className="text">
                    {displayedDuration}
                </div>
            </div>
        )
    } else {
        return (
            <div className="bar">
                <div className="text">
                    {'0:00'}
                </div>
                <Slider value={playingSong.currentTime} min={0} max={playingSong.duration} aria-labelledby="continuous-slider"/>
                <div className="text">
                    {'0:00'}
                </div>
            </div>
        )
    }

}

export default Bar
