import fetch from 'isomorphic-fetch'
import * as containerMapper from '../common/mappers/api-container-mapper'
const standardBaseUrl = 'http://localhost:8080';

export function api (baseUrl = standardBaseUrl){
    return {
        getContainers: () => {
            let url = baseUrl+'/containers';
            return fetch(url)
                	.then(res => res.json())
                    .then(containerMapper.mapMany)
        }
        
    }
}
