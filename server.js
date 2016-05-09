'use strict'
let express = require('express')
let port = process.env.PORT || 8080

let app = express()
app.use(express.static(__dirname + '/dist'))

let router = express.Router()
router.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

router.get('/mockup', (req, res) => {
    res.sendFile( __dirname + '/public/mockup2.html')
})

router.get('/containers', (req, res) => {
    res.json([
    {
        "image": "owtfvalhallatestcontainer:0.1",
        "image_id": "sha256:30511d3bf28058ef62e7361c06cac65314d65ac279852c2acf3226ade0de006d",
        "image_name": "OwtfValhallaTestContainer",
        "image_version": "0.1",
        "image_path": "/root/owtf-valhalla/containers/testcontainer",
        "container_id": "a438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
        "container_name": "/nauseous_newton",
        "container_tag": null,
        "config": {
            "commands": [
                {
                    "code": "666",
                    "noise": "passive",
                    "command": "sleep 5s",
                    "target": "",
                    "description": "Test"
                }
            ],
            "version": "0.1",
            "description": "This container is only used for testing purposes, save it!",
            "title": "OwtfValhallaTestContainer"
        },
        "ip_address": null,
        "results": [],
        "is_image_build": true,
        "is_container_build": true,
        "is_valid": true,
        "is_running": false
    },
    
    {
        "image": "owtfvalhallatestcontainer:0.1",
        "image_id": "sha256:30511d3bf28058ef62e7361c06cac65314d65ac279852c2acf3226ade0de006d",
        "image_name": "OwtfValhallaTestContainer",
        "image_version": "0.1",
        "image_path": "/root/owtf-valhalla/containers/testcontainer",
        "container_id": "a438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
        "container_name": "/nauseous_newton",
        "container_tag": null,
        "config": {
            "commands": [
                {
                    "code": "666",
                    "noise": "passive",
                    "command": "sleep 5s",
                    "target": "",
                    "description": "Test"
                }
            ],
            "version": "0.1",
            "description": "This container is only used for testing purposes, save it!",
            "title": "OwtfValhallaTestContainer"
        },
        "ip_address": null,
        "results": [],
        "is_image_build": true,
        "is_container_build": true,
        "is_valid": true,
        "is_running": false
    },
    
    {
        "image": "owtfvalhallatestcontainer:0.1",
        "image_id": "sha256:30511d3bf28058ef62e7361c06cac65314d65ac279852c2acf3226ade0de006d",
        "image_name": "OwtfValhallaTestContainer",
        "image_version": "0.1",
        "image_path": "/root/owtf-valhalla/containers/testcontainer",
        "container_id": "a438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
        "container_name": "/nauseous_newton",
        "container_tag": null,
        "config": {
            "commands": [
                {
                    "code": "666",
                    "noise": "passive",
                    "command": "sleep 5s",
                    "target": "",
                    "description": "Test"
                }
            ],
            "version": "0.1",
            "description": "This container is only used for testing purposes, save it!",
            "title": "OwtfValhallaTestContainer"
        },
        "ip_address": null,
        "results": [],
        "is_image_build": true,
        "is_container_build": true,
        "is_valid": true,
        "is_running": false
    },
    
    {
        "image": "owtfvalhallatestcontainer:0.1",
        "image_id": "sha256:30511d3bf28058ef62e7361c06cac65314d65ac279852c2acf3226ade0de006d",
        "image_name": "OwtfValhallaTestContainer",
        "image_version": "0.1",
        "image_path": "/root/owtf-valhalla/containers/testcontainer",
        "container_id": "a438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
        "container_name": "/nauseous_newton",
        "container_tag": null,
        "config": {
            "commands": [
                {
                    "code": "666",
                    "noise": "passive",
                    "command": "sleep 5s",
                    "target": "",
                    "description": "Test"
                }
            ],
            "version": "0.1",
            "description": "This container is only used for testing purposes, save it!",
            "title": "OwtfValhallaTestContainer"
        },
        "ip_address": null,
        "results": [],
        "is_image_build": true,
        "is_container_build": true,
        "is_valid": true,
        "is_running": false
    }
])
})

app.use('/', router)


app.listen(port)
