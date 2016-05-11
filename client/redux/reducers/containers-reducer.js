import {List, Map} from 'immutable'

import {
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINERS_ERROR,

    BUILD_CONTAINER_STARTED,
    BUILD_CONTAINER_SUCCESS,
    BUILD_CONTAINER_ERROR,

    START_CONTAINER_STARTED,
    START_CONTAINER_SUCCESS,
    START_CONTAINER_ERROR,

    STOP_CONTAINER_STARTED,
    STOP_CONTAINER_SUCCESS,
    STOP_CONTAINER_ERROR

} from '../actions/action-types'

const initialState = Map({
    fetching: false,
    ready: false,
    fail: false,
    containers: List()
})

const containersReducer = (state = initialState, action) => {

    switch (action.type){
        //Fetch container actions
        case FETCH_CONTAINERS_STARTED:
            return state.set('fetching', true)

        case FETCH_CONTAINERS_SUCCESS:
            return state.withMutations((state) => {
                state.set('fetching', false)
                state.set('ready', true)
                state.set('containers', List(action.containers))
            })

        case FETCH_CONTAINERS_ERROR:
            return state.set('fail', true)

        case BUILD_CONTAINER_STARTED:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex((container) => {return container.image.id === action.imageId}),
                (container) =>{return Map(container).set('thinking', true)}
            ))

        case BUILD_CONTAINER_SUCCESS:
          return state.update('containers', containers =>
            containers.update(
                containers.findIndex((container) => {return container.image.id === action.imageId}),
                (container) =>{return Map(container).set('thinking', false)}
                /*
                (container) =>{
                  return Map(container).withMutations((c) => {
                      c.set('thinking', false)
                      c.set('built', true)
                }

              )}
              */
            ))
    }

    return state
}

export default containersReducer
