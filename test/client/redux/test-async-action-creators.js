const fakeApiUrl = 'http://fake.core-api'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actionCreator from '../../../client/redux/actions/action-creator'
import {api} from '../../../client/services/core-api-service'
import chai from 'chai'
import nock from 'nock'
import * as fakeData from './fake-data'
import {List, Map} from 'immutable'
let assert = chai.assert

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureMockStore(middlewares)
const actions = actionCreator.create(api(fakeApiUrl))

describe('redux async action creators tests', () => {
    before(() => {
        nock(fakeApiUrl)
            .get('/containers')
            .reply(200, fakeData.apiContainersJson)
            
        nock(fakeApiUrl)
            .get('/containers/i1/start')
            .reply(200, 'Okey')
    });
        
    describe('dispatching "fetch container" async action', () => {
        it('should update state twice, once for "started" and once for "success" with an array of containers', (done) => {
            let store = mockStore({})
            store.dispatch(actions.fetchContainersRequest())
                  .then(() => { // return of async actions
                    let actions = store.getActions()
                    assert.equal(actions[0].type, 'FETCH_CONTAINERS_STARTED', 'First action should be FETCH_CONTAINERS_STARTED')
                    assert.equal(actions[1].type, 'FETCH_CONTAINERS_SUCCESS', 'Second action should be FETCH_CONTAINERS_SUCCESS')
                    assert.isArray(actions[1].containers, 'Second actions data should be an array')
                  })
                  .then(done) // test passed
                  .catch(done) // test failed
              })
        });
        
    describe('dispatching "start container" async action', () => {
        it('should update state twice, once for "started" and once for "success" with the image id', (done) =>{
            let initialState = Map({
                fetching: false,
                ready: true,
                fail: false,
                containers: List(fakeData.mappedContainerObjects)
            })
            
            let store = mockStore(initialState)
            store.dispatch(actions.startContainerRequest('i1'))
                  .then(() => { // return of async actions
                    let actions = store.getActions()
                    assert.equal(actions[0].type, 'START_CONTAINER_STARTED', 'First action should be START_CONTAINERS_STARTED')
                    assert.equal(actions[1].type, 'START_CONTAINER_SUCCESS', 'Second action should be START_CONTAINERS_SUCCESS')
                    assert.equal(actions[1].imageId, 'i1', 'Second actions data should be the image id')
                  })
                  .then(done) // test passed
                  .catch(done) // test failed
              })
        });

})
