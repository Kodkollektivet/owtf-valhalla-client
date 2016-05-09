import {Map} from 'immutable'

import {
    FETCH_CONTAINERS_REQUEST,
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS, 
    FETCH_CONTAINERS_ERROR
} from '../actions/action-types'

const initialState = Map({
    fetching: false,
    ready: false,
    fail: false,
    containers: []
})

const fetchContainersReducer = (state = initialState, action) => {

    switch (action.type){
        case FETCH_CONTAINERS_STARTED:
            return state.set('fetching', true)
            
        case FETCH_CONTAINERS_SUCCESS:
            return state.withMutations((state) => {
                state.set('fetching', false)
                state.set('ready', true)
                state.set('containers', action.containers)
            })
            
        case FETCH_CONTAINERS_ERROR:
            return state.set('fail', true)
    }
    
    return state
}

export default fetchContainersReducer