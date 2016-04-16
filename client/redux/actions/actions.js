import {
    FETCH_CONTAINERS_REQUEST, 
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS, 
    FETCH_CONTAINERS_FAILURE,
    
    LOG_INFO,
    LOG_WARN,
    LOG_ERROR,
    LOG_CRITICAL
} from './actions/action-types'

//Containers fetch action creators
export function fetchContainersRequest() {
  return {type: FETCH_CONTAINERS_REQUEST}
}

export function fetchContainersStarted() {
  return {type: FETCH_CONTAINERS_STARTED}
}

export function fetchContainersSuccess(containers) {
  return {type: FETCH_CONTAINERS_SUCCESS, containers: containers}
}

export function fetchContainersFailure(error) {
  return {type: FETCH_CONTAINERS_FAILURE, error: error}
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