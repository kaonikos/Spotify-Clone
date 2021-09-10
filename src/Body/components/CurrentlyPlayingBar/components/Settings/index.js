import React, {useState,useEffect} from 'react'
import settings from '../../../../../media/images/settings.svg'
import volume from '../../../../../media/images/volume.svg'
import fullscreen from '../../../../../media/images/fullscreen.svg'
import { useSelector, useDispatch } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import './styles.css'

const Settings = () => {

    const [value, setValue] = useState(0.5);

    const playingSong = useSelector((state) => state.playingSong) 

    const handleChange = (event, newValue) => {
        setValue(newValue);
        playingSong.volume = value
      };

    useEffect(
        () => {
            playingSong.volume = value
        },[playingSong.currentTime]
    )

    return(
        <div className="settings-area">
            <div className="settings">
                <img src={settings} />
                <img src={volume} />
                <Slider value={value} max={1}  step={0.1} onChange={handleChange} aria-labelledby="continuous-slider"/>
                <img src={fullscreen} />
            </div>
        </div>
    )
}

export default Settings
