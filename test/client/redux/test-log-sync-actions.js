import * as actions from '../../../client/redux/actions/action-creators'
import configureStore from '../../../client/redux/store/configure-store'
import logLevels from '../../../client/common/log-levels'
import chai from 'chai'
import nock from 'nock'
let assert = chai.assert

describe('log redux actions tests', function() {
     describe('log redux actions', function() {
         it('should contain only one info-message (welcome message) when no other log actions has been dispatched', function(){
            let store = configureStore();
            let state = store.getState().toJS();
            assert.lengthOf(state.log.entries, 1, 'There should be only one log entry')
            assert.equal(state.log.entries[0].level, logLevels.info, 'The level of the log entry should be "Info"')
         })
         
        it('should contain messages in the correct order of the expected types when dispatching several log messages', function(){
            
            let store = configureStore();
            store.dispatch(actions.logInfo('Test info message 1'))
            store.dispatch(actions.logInfo('Test info message 2'))
            store.dispatch(actions.logWarn('Test warn message 1'))
            store.dispatch(actions.logCritical('Test crit message 1'))
            store.dispatch(actions.logWarn('Test warn message 2'))
            
            let state = store.getState().toJS();
            
            assert.lengthOf(state.log.entries, 6, 'There should be exactly 6 entries in the log, including the welcome info-message')
            assert.equal(state.log.entries[0].level, logLevels.info, 'The level of the first log entry should be "Info"')
            assert.equal(state.log.entries[1].level, logLevels.info, 'The level of the second log entry should be "Info"')
            assert.equal(state.log.entries[2].level, logLevels.info, 'The level of the third log entry should be "Info"')
            assert.equal(state.log.entries[3].level, logLevels.warn, 'The level of the fourth log entry should be "Warn"')
            assert.equal(state.log.entries[4].level, logLevels.critical, 'The level of the fith log entry should be "Critical"')
            assert.equal(state.log.entries[5].level, logLevels.warn, 'The level of the sixth log entry should be "Warn"')
        })
         
     })
        
})