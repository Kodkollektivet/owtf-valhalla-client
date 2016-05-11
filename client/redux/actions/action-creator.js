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
    STOP_CONTAINER_FAILURE,
    
    LOG_INFO,
    LOG_WARN,
    LOG_ERROR,
    LOG_CRITICAL
} from './action-types'

import {api} from '../../services/core-api-service'

export function create(options = {}){
  let coreApi = api(options.coreApiUrl)
  return {
    fetchContainersRequest(){
      return dispatch => {
        dispatch(fetchContainersStarted())
        return coreApi.getContainers()
              .then(containers => dispatch(fetchContainersSuccess(containers)))
              .catch(ex => dispatch(fetchContainersFailure(ex)))
      }
    },
    
    buildContainerRequest(id){
      return dispatch => {
        dispatch(buildContainersStarted())
        return coreApi.buildContainer(id)
                .then(containerId => dispatch(buildContainersSuccess(containerId)))
                .catch(ex => dispatch(buildContainersFailure(ex)))
      }
    },
    
    startContainerRequest(id){
      return dispatch => {
        dispatch(startContainersStarted())
        return coreApi.startContainer(id)
                .then(containerId => dispatch(startContainersSuccess(containerId)))
                .catch(ex => dispatch(startContainersFailure(ex)))
      }
    },
    
    stopContainerRequest(id){
      return dispatch => {
        dispatch(stopContainersStarted())
        return coreApi.stopContainer(id)
                .then(containerId => dispatch(stopContainersSuccess(containerId)))
                .catch(ex => dispatch(stopContainersFailure(ex)))
      }
    },
    
    logInfo(message, inner){
      return {type: LOG_INFO, message: message, inner: inner}
    },
    
    logWarn(message, inner){
      return {type: LOG_WARN, message: message, inner: inner}
    },
    
    logError(message, inner){
      return {type: LOG_ERROR, message: message, inner: inner}
    },
    
    logCritical(message, inner){
      return {type: LOG_CRITICAL, message: message, inner: inner}
    }
  }
}

//Fetch containers async private action creators
function fetchContainersStarted() {
  return {type: FETCH_CONTAINERS_STARTED}
}

function fetchContainersSuccess(containers) {
  return {type: FETCH_CONTAINERS_SUCCESS, containers: containers}
}

function fetchContainersFailure(error) {
  return {type: FETCH_CONTAINERS_FAILURE, error: error}
}

//Build container async private action creators
function buildContainersStarted() {
  return {type: BUILD_CONTAINER_STARTED}
}

function buildContainersSuccess(containerId) {
  return {type: BUILD_CONTAINER_SUCCESS, containerId: containerId}
}

function buildContainersFailure(error) {
  return {type: BUILD_CONTAINER_FAILURE, error: error}
}

//Start container async private action creators
function startContainersStarted() {
  return {type: START_CONTAINER_STARTED}
}

function startContainersSuccess(containerId) {
  return {type: START_CONTAINER_SUCCESS, containerId: containerId}
}

function startContainersFailure(error) {
  return {type: START_CONTAINER_FAILURE, error: error}
}


//Start container async private action creators
function stopContainersStarted() {
  return {type: STOP_CONTAINER_STARTED}
}

function stopContainersSuccess(containerId) {
  return {type: STOP_CONTAINER_SUCCESS, containerId: containerId}
}

function stopContainersFailure(error) {
  return {type: STOP_CONTAINER_FAILURE, error: error}
}