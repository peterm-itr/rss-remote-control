# RSSchool NodeJS websocket task

> Static http server and base task packages. 
> By default WebSocket client tries to connect to the 8080 port.

## Installation
1. Clone/download repo
2. Copy `.env.dist` and adjust ports if necessary
3. `npm install`
4. Please, look through [Prerequisites](https://nutjs.dev/tutorials/first_steps) section carefully and install required dependencies^
   1. MacOS
      1. `xcode-select --install`
      2. `Settings -> Security & Privacy -> Privacy tab -> Accessibility -> Add...`
   2. Linux
      1. Install libXtst: `sudo apt-get install build-essential libxtst-dev`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:8181` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:8181` without nodemon

---

**All commands**

| Command             | Description                                          |
|---------------------|------------------------------------------------------|
| `npm run start:dev` | App served @ `http://localhost:8181` with nodemon    |
| `npm run start`     | App served @ `http://localhost:8181` without nodemon |
