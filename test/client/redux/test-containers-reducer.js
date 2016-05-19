import containersReducer from '../../../client/redux/reducers/containers-reducer'
import chai from 'chai'
import {Map, List, fromJS} from 'immutable'
let assert = chai.assert

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

} from '../../../client/redux/actions/action-types'

describe('redux containers reducer tests', () =>{
     
      beforeEach(() => {

      });
        
        describe('action FETCH_CONTAINERS_STARTED', () =>{
            const initialState = Map({
                fetching: false,
                ready: false,
                fail: false,
                containers: []
            })
            
            it('should return a state where fetching is set to true', () => {
                let action = {type: FETCH_CONTAINERS_STARTED}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS();
                
                assert.equal(result.fetching, true, 'The fetching field should be true in the returned state object')
            })
        })
        
        describe('action FETCH_CONTAINERS_SUCCESS', () =>{
            const initialState = Map({
                fetching: true,
                ready: false,
                fail: false,
                containers: []
            })
            
            it('should return a state where fetching is set to false and ready is set to true', () => {
                let action = {type: FETCH_CONTAINERS_SUCCESS, containers: []}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS();
                
                assert.equal(result.fetching, false, 'The fetching field should be true in the returned state object')
                assert.equal(result.ready, true, 'The fetching field should be true in the returned state object')
            })
                    
            it('should return a state where containers has the same length as the containers provided in the action', () => {
                let action = {type: FETCH_CONTAINERS_SUCCESS, containers: [{container: {}, image: {}}, {container: {}, image: {}}]}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS();
                
                assert.equal(result.containers.length, 2, 'The containers list in the new state should have a length of 2')
            })
            
        })
        
        describe('action FETCH_CONTAINERS_FAILURE', () =>{  
            
            const initialState = Map({
                fetching: true,
                ready: false,
                fail: false,
                containers: []
            })
            
            it('should return a state where fetching is set to false and fail is set to true', () => {
                let action = {type: FETCH_CONTAINERS_FAILURE, containers: []}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS();
                assert.equal(result.fetching, false, 'The fetching field should be true in the returned state object')
                assert.equal(result.fail, true, 'The fail field should be true in the returned state object')
            })
        })
        
        describe('action BUILD_CONTAINER_STARTED', () =>{
            const initialState = fromJS({
                fetching: true,
                ready: true,
                fail: false,
                containers: [
                    {
                        container:{id:"c1", built: false}, 
                        image:{id:"i1", isBuilt: true}, 
                        thinking:false
                    },
                    {
                        container:{id:"c2", built: false}, 
                        image:{id:"i2", isBuilt: true}, 
                        thinking:false
                    }]
            })
            
            it('should return a state where target container has thinking set to true', () => {
                let action = {type: BUILD_CONTAINER_STARTED, imageId: "i2"}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS()
                assert.equal(result.containers[1].thinking, true, 'The thinking field should be true for the targeted container in the returned state object')
            })
            
        })
        
        describe('action BUILD_CONTAINER_SUCCESS', () =>{
            const initialState = fromJS({
                fetching: true,
                ready: true,
                fail: false,
                containers: [
                    {
                        container:{id:"c1", built: false}, 
                        image:{id:"i1", isBuilt: true}, 
                        thinking:false,
                        hasError:false
                    },
                    {
                        container:{id:"c2", built: false}, 
                        image:{id:"i2", isBuilt: true},  
                        thinking:true,
                        hasError:false
                    }]
            })
            
            it('should return a state where target container has thinking set to true and container.built set to true', () => {
                let action = {type: BUILD_CONTAINER_SUCCESS, imageId: "i2"}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS()
                assert.equal(result.containers[1].thinking, false, 'The thinking field should be false for the targeted container in the returned state object')
                assert.equal(result.containers[1].container.built, true, 'The isBuilt field should be true for the targeted container in the returned state object')
            })
            
        })
        
        describe('action BUILD_CONTAINER_FAILURE', () =>{
            const initialState = fromJS({
                fetching: true,
                ready: true,
                fail: false,
                containers: [
                    {
                        container:{id:"c1", built: false}, 
                        image:{id:"i1", isBuilt: true}, 
                        thinking:true,
                        hasError:false
                    },
                    {
                        container:{id:"c2", built: false}, 
                        image:{id:"i2", isBuilt: true},  
                        thinking:false,
                        hasError:false
                    }]
            })
            
            it('should return a state where the target container has hasError field set to true and thinking set to false', () => {
                let action = {type: BUILD_CONTAINER_FAILURE, imageId: "i1", error: new Error("Build container failure")}
                let nextState = containersReducer(initialState, action)
                let result = nextState.toJS();
                assert.equal(result.containers[0].thinking, false, 'The thinking field should be false in the returned state object')
                assert.equal(result.containers[0].hasError, true, 'The hasError field should be true in the returned state object')
            })
            
        })
        
        describe('action START_CONTAINER_STARTED', () =>{
            
        })
        describe('action START_CONTAINER_SUCCESS', () =>{
            
        })
        describe('action START_CONTAINER_FAILURE', () =>{
            
        })
        
        describe('action START_CONTAINER_STARTED', () =>{
            
        })
        describe('action START_CONTAINER_SUCCESS', () =>{
            
        })
        describe('action START_CONTAINER_FAILURE', () =>{
            
        })
    
})