import { combineReducers } from 'redux'

import { CHANGE_TAB_NAME, FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS} from '../actions/actionsType';

let initState = {
    name: 'HOME'
}

export function changeTabname(state = initState, action){
    switch(action.type){
        case CHANGE_TAB_NAME: 
            console.log(action)
            return {name: action.name};
            break;
        default: 
            return state;
    }
}

export function asyncGetData(state={isFetch: false}, action){
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetch: true
            }
        break;
        case FETCH_POSTS_SUCCESS: 
            return {
                ...state,
                isFetch: false
            }
        break;
        default: 
            return state;
    }
}

export default combineReducers({
  name: changeTabname,
  asyncData: asyncGetData
})
