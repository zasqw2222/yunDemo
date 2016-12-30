import {CHANGE_TAB_NAME, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from './actionsType';

export function changeTabName(name) {
    return {type: CHANGE_TAB_NAME, name}
}

export function asyncGetData() {
    return function (dispatch, getState) {
        dispatch({type: FETCH_POSTS_REQUEST})
        // 异步操作
        return setTimeout(function () {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                res: [
                    {
                        s: 'm1',
                        s1: 'm2'
                    }
                ]
            })
        }, 3000);
    }
}