var CoreApiService = require('../../../client/services/core-api-service').CoreApiService
var api = new CoreApiService()
var fakeData = require('./fake-data')
var nock = require("nock")
var chai = require("chai")
var chaiAsPromised = require("chai-as-promised")
var assert = chai.assert
chai.use(chaiAsPromised)

describe('core-api-service.js', function() {

    before(function() {
        nock('http://localhost:8080')
            .get('/containers')
            .reply(200, fakeData.apiContainers)
            
    });
    
    describe('#getContainers', function() {

        it('should return two containers', function() {
            return api.getContainers().then(function(containers){
                assert.lengthOf(containers, 2,"There should be two containers");
            });
        });
    });
});
