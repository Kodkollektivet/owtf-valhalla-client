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

        //containers/<IMAGE>/build
        buildContainer: (image) => {
            let url = baseUrl+image;
            console.log("buildContainer in core-api-service");
            console.log(url);
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
            let url = baseUrl+image;
            return fetch(url)
                    .then(image)
        },
        
        //containers/<IMAGE>/start
        startContainer: (image) => {
            let url = baseUrl+image;
            console.log("startContainer in core-api-service");
            console.log(url);
            return fetch(url)
                    .then(image)
        },

        //containers/<IMAGE>/stop
        stopContainer: (image) => {
            let url = baseUrl+image;
            return fetch(url)
                    .then(image)
        }

    }
}
