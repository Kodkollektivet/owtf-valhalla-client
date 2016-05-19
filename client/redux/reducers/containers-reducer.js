import {List, Map, fromJS} from 'immutable'

import {
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINERS_FAILURE,

    BUILD_CONTAINER_STARTED,
    BUILD_CONTAINER_SUCCESS,
    BUILD_CONTAINER_FAILURE,

    START_CONTAINER_STARTED,
    START_CONTAINER_SUCCESS,
    START_CONTAINER_FAILURE,

    STOP_CONTAINER_STARTED,
    STOP_CONTAINER_SUCCESS,
    STOP_CONTAINER_FAILURE

} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    ready: false,
    fail: false,
    containers: []
})

const containersReducer = (state = initialState, action) => {
    switch (action.type){
        //Fetch container actions
        case FETCH_CONTAINERS_STARTED:
            return state.set('fetching', true)

        case FETCH_CONTAINERS_SUCCESS:
            return state.withMutations(state => {
                state.set('fetching', false)
                state.set('ready', true)
                state.set('containers', fromJS(action.containers))
            })

        case FETCH_CONTAINERS_FAILURE:
            return state.withMutations(state => {
                state.set('fetching', false)
                state.set('fail', true)
            })
        
        case BUILD_CONTAINER_STARTED:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex(container => container.getIn(['image','id']) === action.imageId),
                container =>container.set('thinking', true)
            ))

        case BUILD_CONTAINER_SUCCESS:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex(container => container.getIn(['image','id']) === action.imageId),
                container =>{
                   return container.withMutations(container => {
                        container.set('thinking', false)
                        container.setIn(['container','built'], true)
                    })
                }
            ))
            
        case BUILD_CONTAINER_FAILURE:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex(container => container.getIn(['image','id']) === action.imageId),
                container =>{
                   return container.withMutations(container => {
                        container.set('thinking', false)
                        container.set('hasError', true)
                    })
                }
            ))
        
        case START_CONTAINER_STARTED:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex(container => container.toJS().image.id === action.imageId),
                container => container.set('thinking', true)
            ))
            
        case START_CONTAINER_SUCCESS:
          return state.update('containers', (containers) =>
            containers.update(
                containers.findIndex(container => container.toJS().image.id === action.imageId),
                container =>{
                    container.withMutations(container => {
                        container.set('thinking', false)
                        container.setIn(['container', 'running'], true)
                    })
                }
            ))
    }

    return state
}

export default containersReducer
