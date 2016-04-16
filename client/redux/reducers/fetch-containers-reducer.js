import coreApi from '../../services/core-api-service'
import {Map} from 'immutable'

import {
    FETCH_CONTAINERS_REQUEST,
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS, 
    FETCH_CONTAINERS_ERROR
} from '../actions/action-types'

import {
    fetchContainersSuccess, 
    fetchContainersStarted, 
    fetchContainersFailure,
    
    logError
} from '../actions/actions'

const initialState = Map({
    fetching: false,
    ready: false,
    containers: []
})

const fetchContainersReducer = (state = initialState, action) => {

    switch (action){
        case FETCH_CONTAINERS_REQUEST:
             return dispatch => {
                 dispatch(fetchContainersStarted())
                 
                 coreApi.getContainers()
                    .then(containers => dispatch(fetchContainersSuccess(containers)))
                    .catch(error => dispatch(fetchContainersFailure(error)))
             }
        
        case FETCH_CONTAINERS_STARTED:
            return state.set('fetching', true)
            
        case FETCH_CONTAINERS_SUCCESS:
            return state.withMutations(state => {
                state.set('fetching', false)
                state.set('ready', true)
                state.set('containers', action.containers)
            })
        
        case FETCH_CONTAINERS_ERROR:
            return dispatch => {
                dispatch(logError('Could not fetch containers from core API.', action.error))
            }
    }
    
    return state
}

export default fetchContainersReducer