# OWTF-Valhalla Web Client

[![Build Status](https://travis-ci.org/Kodkollektivet/owtf-valhalla-client.svg?branch=master)](https://travis-ci.org/Kodkollektivet/owtf-valhalla-client)

> This is the web client interface for OWTF-Valhalla. Work in progress


## Run client in Docker

```bash
docker build -t owtf-client:0.1 .
docker run -it --rm -p 8080:8080 -v $PWD:/code owtf-client:0.1 bash

When inside of container:
npm start
```

Visit container IP on port 8080.