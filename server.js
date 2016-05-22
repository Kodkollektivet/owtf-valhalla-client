'use strict'
let express = require('express')
let cors = require('cors')


let port = process.env.PORT || 8080

let app = express()
app.use(cors())
app.use(express.static(__dirname + '/dist'))

let router = express.Router()
router.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
})

router.get('/mockup', (req, res) => {
    res.sendFile( __dirname + '/public/mockup2.html')
})

router.get('/containers/:image/build_image', (req, res) => {
    res.status(200).send('This is nice!')
})

router.get('/containers/:image/build_container', (req, res) => {
  setTimeout(() => {
    if(req.params.image == "i1")
        res.status(200).send('This is nice!')
    else
      res.status(500).send('This is not nice!')
    }, 3500);

})

router.get('/containers/:image/start', (req, res) => {
  setTimeout(() => {
        res.status(200).send('This is nice!')
    }, 2500);
})

router.get('/containers/:image/stop', (req, res) => {
  setTimeout(() => {
        res.status(200).send('This is nice!')
    }, 1500);
})

router.get('/containers', (req, res) => {
    res.json([
        {
            "image": "owtfvalhallatestcontainer:0.1",
            "image_id": "i1",
            "image_name": "WIN 3.11 Final",
            "image_version": "1.2",
            "image_path": "/root/owtf-valhalla/containers/testcontainer",
            "container_id": "a438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
            "container_name": "Awsum containerz 1337",
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
            "is_container_build": false,
            "is_valid": true,
            "is_running": false
        },

        {
            "image": "owtfvalhallatestcontainer:0.1",
            "image_id": "i2",
            "image_name": "OS2",
            "image_version": "1.5",
            "image_path": "/root/owtf-valhalla/containers/testcontainer",
            "container_id": "b438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
            "container_name": "Jörnmungadr",
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
            "is_container_build": false,
            "is_valid": true,
            "is_running": false
        },

        {
            "image": "owtfvalhallatestcontainer:0.1",
            "image_id": "i3",
            "image_name": "Derpanet",
            "image_version": "0.5",
            "image_path": "/root/owtf-valhalla/containers/testcontainer",
            "container_id": "c438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
            "container_name": "Gallifrey",
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
                "version": "0.5",
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
            "image_id": "i4",
            "image_name": "!Symbian OS",
            "image_version": "3.1",
            "image_path": "/root/owtf-valhalla/containers/testcontainer",
            "container_id": "d438674014201a27cb64b05795eafe629c59aac3cd9320084a239fc59060d53a",
            "container_name": "Darknet",
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
