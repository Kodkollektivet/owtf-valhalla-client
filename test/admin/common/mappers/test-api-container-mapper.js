var containerMapper = require('../../../../client/common/mappers/api-container-mapper')
var chai = require("chai")
var chaiAsPromised = require("chai-as-promised")
var fakeData = require('./fake-data')
var assert = chai.assert
chai.use(chaiAsPromised)

describe('api-container-mapper.js', function() {
    
    describe('#mapSingle', function() {

        it('should map fields of a Core API container entity', function() {
            let singleApiContainer = fakeData.twoApiContainers[0];
            let mappedContainerObject = containerMapper.mapSingle(singleApiContainer);
            
            assert.equal(mappedContainerObject.image.id, singleApiContainer.image_id, "image_id should be mapped to image.id")
            assert.equal(mappedContainerObject.image.name, singleApiContainer.image_name, "image_name should be mapped to image.name")
            assert.equal(mappedContainerObject.image.path, singleApiContainer.image_path, "image_path should be mapped to image.path")
            assert.equal(mappedContainerObject.image.version, singleApiContainer.image_version, "image_version should be mapped to image.version")
            assert.equal(mappedContainerObject.image.isBuilt, singleApiContainer.is_image_build, "is_image_build should be mapped to image.isBuilt")
            
            assert.equal(mappedContainerObject.container.id, singleApiContainer.container_id, "container_id should be mapped to container.id")
            assert.equal(mappedContainerObject.container.name, singleApiContainer.container_name, "container_name should be mapped to container.name")
            assert.equal(mappedContainerObject.container.tag, singleApiContainer.container_tag, "container_tag should be mapped to container.tag")
            assert.equal(mappedContainerObject.container.built, singleApiContainer.is_container_build, "is_container_build should be mapped to container.built")
        });
    });
    
    describe('#mapMany', function() {

        it('should map fields of several Core API container entities in an Array', function() {
            let mappedContainersArray = containerMapper.mapMany(fakeData.twoApiContainers)
            assert.isArray(mappedContainersArray, 'the mapped object should be an Array')
            assert.lengthOf(mappedContainersArray, 2, 'the returned Array should have a length of 2')
            assert.equal(mappedContainersArray[0].image.id, fakeData.twoApiContainers[0].image_id, "first entity's image_id should be mapped to image.id")
            assert.equal(mappedContainersArray[0].image.name, fakeData.twoApiContainers[0].image_name, "first entity's image_name should be mapped to image.name")
            assert.equal(mappedContainersArray[0].container.id, fakeData.twoApiContainers[0].container_id, "first entity's container_id should be mapped to container.id")
            assert.equal(mappedContainersArray[0].container.name, fakeData.twoApiContainers[0].container_name, "first entity's container_name should be mapped to container.name")
            
            assert.equal(mappedContainersArray[1].image.id, fakeData.twoApiContainers[1].image_id, "second entity's image_id should be mapped to image.id")
            assert.equal(mappedContainersArray[1].image.name, fakeData.twoApiContainers[1].image_name, "second entity's image_name should be mapped to image.name")
            assert.equal(mappedContainersArray[1].container.id, fakeData.twoApiContainers[1].container_id, "second entity's container_id should be mapped to container.id")
            assert.equal(mappedContainersArray[1].container.name, fakeData.twoApiContainers[1].container_name, "second entity's container_name should be mapped to container.name")
        });
    });
});
