import {List, Map, fromJS} from 'immutable'

import {
    FETCH_COMMANDS_STARTED,
    FETCH_COMMANDS_SUCCESS,
    FETCH_COMMANDS_FAILURE,
} from '../actions/action-types'

const initialState = fromJS({
    fetching: false,
    ready: false,
    fail: false,
    commands: []
})

const containersReducer = (state = initialState, action) => {
    switch (action.type){

        //Fetch commands actions
        case FETCH_COMMANDS_STARTED:
            return state.set('fetching', true)

        case FETCH_COMMANDS_SUCCESS:
            return state.withMutations(state => {
                state.set('fetching', false)
                state.set('ready', true)
                state.set('commands', fromJS(action.commands))
            })

        case FETCH_COMMANDS_FAILURE:
            return state.withMutations(state => {
                state.set('fetching', false)
                state.set('fail', true)
            })

    }

    return state
}

export default containersReducer
