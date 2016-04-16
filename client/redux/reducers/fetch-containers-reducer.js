import {getContainers} from '../../services/core-api-service'
//let coreApi = new CoreApiService()
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

    switch (action){
        case FETCH_CONTAINERS_STARTED:
            return state.update('fetching', true)
            
        case FETCH_CONTAINERS_SUCCESS:
            return state.withMutations(state => {
                state.update('fetching', false)
                state.update('ready', true)
                state.update('containers', action.containers)
            })
         
        case FETCH_CONTAINERS_ERROR:
            return state.update('fail', true)
    }
    
    return state
}

export default fetchContainersReducer