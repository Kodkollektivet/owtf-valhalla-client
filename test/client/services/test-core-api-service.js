const fakeApiUrl = 'http://fake.core-api'

import * as fakeData from './fake-data'
import chai from 'chai'
import nock from 'nock'
import chaiAsPromised from 'chai-as-promised'
let assert = chai.assert

import {api} from '../../../client/services/core-api-service'
const coreApi = api(fakeApiUrl);

chai.use(chaiAsPromised)

describe('core-api-service.js', function() {

    before(function() {
        nock(fakeApiUrl)
            .get('/containers')
            .reply(200, fakeData.apiContainers)
            
    });
    
    describe('#getContainers', function() {

        it('should return two containers', function() {
            return coreApi.getContainers().then(function(containers){
                assert.lengthOf(containers, 2,"There should be two containers");
            });
        });
        
    });
});
