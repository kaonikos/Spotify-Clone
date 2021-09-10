import {Actions} from './actions'
import tracks from '../tracks.json'

let temp = new Audio(`/songs/mp3/acousticbreeze.mp3}`)
let array = [],i

for (i=0; i<tracks.length;i++) {
    array[i]=i
}

const initState = {
    screen: 'Home',
    playing: false,
    shuffleState: false,
    repeatState: false,
    originalSongs: tracks,
    songs: array,
    playingSong: temp,
    playingSongName: 'acousticbreeze.mp3',
    favourites: [],

}

const reducer = (currentState = initState, action) => {
    switch (action.type) {
        case Actions.SetScreen:
            return{
                ...currentState,
                screen: action.payload
            }
        case Actions.SetPlaying:
            return{
                ...currentState,
                playing: action.payload
            }
        case Actions.SetShuffleState:
            return{
                ...currentState,
                shuffleState: action.payload
            }
        case Actions.SetRepeat:
            return{
                ...currentState,
                repeatState: action.payload
            }
        case Actions.SetPlayingSong:
            return{
                ...currentState,
                playingSong: action.payload
            }
        case Actions.SetPlayingSongName:
            return{
                ...currentState,
                playingSongName: action.payload
            }
        case Actions.SetSongs:
            return{
                ...currentState,
                songs: action.payload
            }
        case Actions.SetFavourites:
            return{
                ...currentState,
                favourites: action.payload
            }
        default: return currentState
    }
}

export default reducer