import {combineReducers} from 'redux-immutable';
import containersReducer from './containers-reducer'
import logReducer from './log-reducer'

const rootReducer = combineReducers({
  log: logReducer,
  containerList: containersReducer, 
})


export default rootReducer
