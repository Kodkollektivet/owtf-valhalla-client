import { createStore, applyMiddleware, compose } from 'redux'
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk'
import fetchContainersReducer from '../reducers/fetch-containers-reducer'
import logReducer from '../reducers/log-reducer'
import {Map} from 'immutable'

const reducers = combineReducers({
  log: logReducer,
  containerList: fetchContainersReducer
})

export default function configureStore(initialState = Map({})) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk)
    )
  )

  return store
}