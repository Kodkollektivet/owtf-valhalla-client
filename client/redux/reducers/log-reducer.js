import {Map, List} from 'immutable'
import coreApi from '../../services/core-api-service'

import {
    LOG_INFO,
    LOG_WARN,
    LOG_ERROR,
    LOG_CRITICAL 
} from '../actions/action-types'

const _level = {
    info: 'Info',
    warn: 'Warning',
    error: 'Error',
    critical: 'Critical'
}

const initialState = Map({
    focusEntry: null,
    entries: List([{level:_level.info, message: 'Welcome to admin gui for OWTF Valhalla.', inner: ''}])
})

const logReducer = (state = initialState, action) => {
    switch (action.type){
        case LOG_INFO:
            return state.update('entries', entries => entries.push({level: _level.info, message: action.message, inner: action.inner}))
        
        case LOG_WARN:
            return state.update('entries', entries => entries.push({level: _level.warn, message: action.message, inner: action.inner}))
            
        case LOG_ERROR:
            return state.update('entries', entries => entries.push({level: _level.error, message: action.message, inner: action.inner}))
        
        case LOG_CRITICAL:
            return state.update('entries', entries => entries.push({level: _level.critical, message: action.message, inner: action.inner}))

    }
    
    return state
}

export default logReducer