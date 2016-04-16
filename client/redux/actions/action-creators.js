import {
    FETCH_CONTAINERS_REQUEST, 
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS, 
    FETCH_CONTAINERS_FAILURE,
    
    LOG_INFO,
    LOG_WARN,
    LOG_ERROR,
    LOG_CRITICAL
} from './action-types'

import {api} from '../../services/core-api-service'
const coreApi = api();


function fetchContainersStarted() {
  return {type: FETCH_CONTAINERS_STARTED}
}

function fetchContainersSuccess(containers) {
  return {type: FETCH_CONTAINERS_SUCCESS, containers: containers}
}

function fetchContainersFailure(error) {
  return {type: FETCH_CONTAINERS_FAILURE, error: error}
}

export function fetchContainers(){
  return dispatch => {
    dispatch(fetchContainersStarted())
    return coreApi.getContainers()
          .then(containers => dispatch(fetchContainersSuccess(containers)))
          .catch(ex => dispatch(fetchContainersFailure(ex)))
  }
}


//Log action creators
export function logInfo(message, inner){
  return {type: LOG_INFO, message: message, inner: inner}
}

export function logWarn(message, inner){
  return {type: LOG_WARN, message: message, inner: inner}
}

export function logError(message, inner){
  return {type: LOG_ERROR, message: message, inner: inner}
}

export function logCritical(message, inner){
  return {type: LOG_CRITICAL, message: message, inner: inner}
}