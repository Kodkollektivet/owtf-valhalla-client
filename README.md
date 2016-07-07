# OWTF-Valhalla Web Client

[![Build Status](https://travis-ci.org/Kodkollektivet/owtf-valhalla-client.svg?branch=master)](https://travis-ci.org/Kodkollektivet/owtf-valhalla-client)

> This is the web client interface for OWTF-Valhalla. Work in progress


## Run client in Docker

```bash
docker build -t owtf-client:0.1 .
docker run -it -v $PWD:/code --net host owtf-client:0.1 bash
cd /code
npm install
export CORE_API_URL=http://<CORE_IP_ADDRESS>:8000
npm start
```

Visit container IP on port 8080.

## For developers
Checkout [DEVNOTES.md](DEVNOTES.md)

