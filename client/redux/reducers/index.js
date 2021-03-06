import {combineReducers} from 'redux-immutable';
import containersReducer from './containers-reducer'
import commandsReducer from './commands-reducer'
import logReducer from './log-reducer'

const rootReducer = combineReducers({
  log: logReducer,
  containerList: containersReducer,
  commandList: commandsReducer
})

export default rootReducer
