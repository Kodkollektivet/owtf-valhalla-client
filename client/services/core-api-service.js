import fetch from 'node-fetch'
import containerMapper from '../common/mappers/api-container-mapper'
const standardBaseUrl = 'http://localhost:8080';

export class CoreApiService {
    constructor(baseUrl){
        this.baseUrl = baseUrl || standardBaseUrl;
    }
    
    getContainers() {
        let url = this.baseUrl+'/containers';
        return new Promise((resolve, reject) => {
            fetch(url)
            	.then(function(res) {
            		return res.text()
            	})
            	.then(JSON.parse)
            	.then(function(apiContainerEntityList) {
            	   resolve(containerMapper.mapMany(apiContainerEntityList))
            	});
            	
        });
    }
}
