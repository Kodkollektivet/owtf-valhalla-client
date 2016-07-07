module.exports.apiCommandsJson = [
  {
        "code": "666",
        "target": "",
        "image": "owtfvalhallatestcontainer:0.1",
        "noise": "passive",
        "command": "sleep 5s",
        "description": "Test"
      },
  {
    "code": "667",
      "target": "",
      "image": "owtfvalhallatestcontainer:0.1",
      "noise": "passive",
      "command": "sleep 5s",
      "description": "Test"
    }
]

module.exports.apiContainersJson = [
    {
        'image' : 'test-image-01',
        'image_id' : 'i1',
        'image_name' : 'test-image-01',
        'image_version' : '1.2.1',
        'image_path' : '',

        'container_id' : 'c1',
        'container_name' : 'test-container-01',
        'container_tag' : 'test',

       'config'  : '{}',
        'ip_address' : '123.33.44.100',

        'results' : '[]',

        'is_image_build' : 'false',
        'is_container_build' : 'false',
        'is_valid' : 'true',
        'is_running' : 'false'
    },
        {
        'image' : 'test-image-02',
        'image_id' : 'i2',
        'image_name' : 'test-image-02',
        'image_version' : '1.1.3',
        'image_path' : '',

        'container_id' : 'c2',
        'container_name' : 'test-container-02',
        'container_tag' : 'test',

       'config'  : '{}',
        'ip_address' : '123.33.44.200',

        'results' : '[]',

        'is_image_build' : 'false',
        'is_container_build' : 'false',
        'is_valid' : 'true',
        'is_running' : 'false'
    }
]

module.exports.mappedContainerObjects = [
    {
        thinking: false, //State helper value
        valid: '',
        running: false,
        ip: '',
        results: '',
        config: '',
        image: {
            id: 'i1',
            name: 'image 1',
            version: '',
            path: '',
            isBuilt: true,
        },
        container: {
            id: 'c1',
            name: 'container 1',
            tag: 'tag',
            built: true
        }
    },
       {
        thinking: false, //State helper value
        valid: '',
        running: false,
        ip: '',
        results: '',
        config: '',
        image: {
            id: 'i2',
            name: 'image 2',
            version: '',
            path: '',
            isBuilt: false,
        },
        container: {
            id: 'c2',
            name: 'container 2',
            tag: 'tag',
            built: false
        }
    }
]
