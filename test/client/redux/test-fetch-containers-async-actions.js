const fakeApiUrl = 'http://fake.core-api'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actionCreator from '../../../client/redux/actions/action-creator'
import chai from 'chai'
import nock from 'nock'
import * as fakeData from './fake-data'

let assert = chai.assert

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureMockStore(middlewares);
const actions = actionCreator.create({coreApiUrl: fakeApiUrl})

describe('redux async "fetch containers actions" tests', function() {
    before(function() {
        nock(fakeApiUrl)
            .get('/containers')
            .reply(200, fakeData.apiContainers);
    });
    
    describe('dispatching "fetch containers" async action', function() {
        it('should update state twice, once for "started" and once for "success" with an array of containers', function(done){
            var store = mockStore({})
            store.dispatch(actions.fetchContainers())
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
    
})