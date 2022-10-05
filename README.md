# Smart Farming API
Powered by Express JS | ACES Labs

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

#### Installation
Clone repositories:
```sh
git clone https://github.com/ghofaralhasyim/smart-farm-backend.git
```
Open directory:
```sh
cd smart-farm-backend
```
Install dependencies:
```sh
npm i
```
Start smart-farm-backend:
```sh
nodemon start
```
*notes : if nodemon unrecognized command, you need to install nodemon globaly: **npm install -g nodemon**

#### Environtment
```sh
DB_URI={your_mongo_uri_access}
JWT_KEY={your_jwt_secret_key}
```
#### Documentation
API URL : https://smart-farm-backend.vercel.app

**Get all data logs**
```sh
GET  /api/data_logs
```
**Get data log by id**
```sh
GET  /api/data-logs/{id_log}
```
**Post single data**
```sh
GET  /api/data-logs/add-single-data
```
body:
{ 
  data: {
    "timestamp": 1664264826855,
    "node": 3,
    "airtemp": 0.5,
    "airhum": 25.5,
    "soilhum": 25.5,
    "gps": {
        "lat": 12.2823,
        "long": -34.23
    }
  }
}

**Post multiple data**
```sh
GET  /api/data-logs/add-data
```
body: {data: []}. Data = array of object single data.

To be continued...
