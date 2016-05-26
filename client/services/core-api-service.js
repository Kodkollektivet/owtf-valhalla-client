import fetch from 'isomorphic-fetch'
import * as containerMapper from '../common/mappers/api-container-mapper'
const standardBaseUrl = process.env.CORE_API_URL;

export function api (baseUrl = standardBaseUrl){
    return {

        //containers/
        getContainers: () => {
            let url = baseUrl+'/containers';
            return fetch(url)
                	.then(res => {
                      if(!res.ok)
                        throw new Error("The response answered with "+res.status+": "+res.statusText)

                        return res.json()
                  })
                  .then(containerMapper.mapMany)
        },

        //containers/<IMAGE>/build_image
        buildImage: (image) => {
            let url = baseUrl+'/containers/'+image+'/build_image';
            return fetch(url)
                    .then(image)
        },

        //containers/<IMAGE>/build_container
        buildContainer: (image) => {
            let url = baseUrl+'/containers/'+image+'/build_container';
            return fetch(url)
                  	.then(res => {
                      console.log(res)
                        if(!res.ok)
                          throw new Error("The response answered with "+res.status+": "+res.statusText)
                    })
                    .then(image)
        },

        //containers/<IMAGE>/remove
        removeImage: (image) => {
            let url = baseUrl+'/containers/'+image+'/remove_image';
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
