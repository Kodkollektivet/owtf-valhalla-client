import {
    FETCH_CONTAINERS_STARTED,
    FETCH_CONTAINERS_SUCCESS,
    FETCH_CONTAINERS_FAILURE,

    BUILD_CONTAINER_STARTED,
    BUILD_CONTAINER_SUCCESS,
    BUILD_CONTAINER_FAILURE,

    REMOVE_CONTAINER_STARTED,
    REMOVE_CONTAINER_SUCCESS,
    REMOVE_CONTAINER_FAILURE,

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

export function create(coreApi = api()){
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
        dispatch(buildContainerStarted(id))
        return coreApi.buildContainer(id)
                .then(containerId => dispatch(buildContainerSuccess(id)))
                .catch(ex => dispatch(buildContainerFailure(id, ex)))
      }
    },

    removeContainerRequest(id){
      return dispatch => {
        dispatch(removeContainerStarted(id))
        return coreApi.removeImage(id)
                .then(containerId => dispatch(removeContainerSuccess(containerId)))
                .catch(ex => dispatch(removeContainerFailure(id, ex)))
      }
    },

    startContainerRequest(id){
      return dispatch => {
        dispatch(startContainerStarted(id))
        return coreApi.startContainer(id)
                .then(containerId => dispatch(startContainerSuccess(id)))
                .catch(ex => dispatch(startContainerFailure(id, ex)))
      }
    },

    stopContainerRequest(id){
      return dispatch => {
        dispatch(stopContainerStarted(id))
        return coreApi.stopContainer(id)
                .then(containerId => dispatch(stopContainerSuccess(id)))
                .catch(ex => dispatch(stopContainerFailure(id, ex)))
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
function buildContainerStarted(id) {
  return {type: BUILD_CONTAINER_STARTED, imageId: id}
}

function buildContainerSuccess(id) {
  return {type: BUILD_CONTAINER_SUCCESS, imageId: id}
}

function buildContainerFailure(id, error) {
  return {type: BUILD_CONTAINER_FAILURE, imageId: id, error: error}
}

//Remove container async private action creators
function removeContainerStarted(id) {
  return {type: REMOVE_CONTAINER_STARTED, imageId: id}
}

function removeContainerSuccess(id) {
  return {type: REMOVE_CONTAINER_SUCCESS, imageId: id}
}

function removeContainerFailure(id, error) {
  return {type: REMOVE_CONTAINER_FAILURE, imageId: id, error: error}
}

//Start container async private action creators
function startContainerStarted(id) {
  return {type: START_CONTAINER_STARTED, imageId: id}
}

function startContainerSuccess(id) {
  return {type: START_CONTAINER_SUCCESS, imageId: id}
}

function startContainerFailure(error) {
  return {type: START_CONTAINER_FAILURE, error: error}
}


//Start container async private action creators
function stopContainerStarted() {
  return {type: STOP_CONTAINER_STARTED}
}

function stopContainerSuccess(containerId) {
  return {type: STOP_CONTAINER_SUCCESS, containerId: containerId}
}

function stopContainerFailure(error) {
  return {type: STOP_CONTAINER_FAILURE, error: error}
}
