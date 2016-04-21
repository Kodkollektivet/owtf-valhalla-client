import {combineReducers} from 'redux-immutable';
import fetchContainersReducer from './fetch-containers-reducer'
import logReducer from './log-reducer'

const rootReducer = combineReducers({
  log: logReducer,
  containerList: fetchContainersReducer
})


export default rootReducer
