import fetch from 'isomorphic-fetch'
import * as containerMapper from '../common/mappers/api-container-mapper'
const standardBaseUrl = 'http://localhost:8080';

export function api (baseUrl = standardBaseUrl){
    return {
        
        //containers/
        getContainers: () => {
            let url = baseUrl+'/containers';
            return fetch(url)
                	.then(res => res.json())
                    .then(containerMapper.mapMany)
        },
        
                
        //containers/<IMAGE>/build_container
        buildImage: (image) => {
            let url = baseUrl+'/containers/'+image+'/build_image';
            return fetch(url)
                    .then(image)
        },
        
        //containers/<IMAGE>/build_container
        buildContainer: (image) => {
            let url = baseUrl+'/containers/'+image+'/build_container';
            return fetch(url)
                    .then(image)
        },
        
        //containers/<IMAGE>/start
        startContainer: (image) => {
            let url = baseUrl+'/containers/'+image+'/start';
            return fetch(url)
                    .then(image)
        },
        
        //containers/<IMAGE>/stop
        stopContainer: (image) => {
            let url = baseUrl+'/containers/'+image+'/stop';
            return fetch(url)
                    .then(image)
        }
        
    }
}
