import React from 'react'
import {Home,LikedSongs} from './components'
import {Actions} from '../../../reducer/actions'
import { useSelector, useDispatch } from 'react-redux'

const DisplayedScreen = () => {

    const dispatch = useDispatch();

    const screen = useSelector((state) => state.screen)
    const setScreen = (payload) => dispatch({ type: Actions.SetScreen, payload });

    switch(screen) {
        case 'Home':
            return <Home/>
        case 'Search':
            return <Home/>
        case 'Library':
            return <Home/>
        case 'Create Playlist':
            return <Home/>
        case 'Liked Songs':
            return <LikedSongs/>
      }

}

export default DisplayedScreen
