import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import devToolsExtensionResolver from '../helpers/dev-tools-extension-resolver' 
import {Map} from 'immutable'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger()),
  devToolsExtensionResolver()
)(createStore)

export default function configureStore(initialState = Map({})) {
  return finalCreateStore(rootReducer, initialState)
}