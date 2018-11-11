# node.js_backend_project
This project is a backend api built with Express.js and socket.io for communicating events to the client

## How to use it
 - clone the repo
 - run “npm install” to install all dependencies
 - run "npm test" to run the test script as well as the linter script
 - run "npm start" to start the server, which will run server.js
 - open a new tab in browser and go to http://localhost:8000/, this will connect to the server, and you should see "a user connected" in the console
 - use postman(or other tools) to make a POST request to http://localhost:8000/json with some valid json body
 - the respond should be the json body, and you should see stringtified json body in the browser
 - and if you make the POST request multiple times, you see all the json bodys that has been sent append from top to bottom in the browser
 - close the tab and you should see "user disconnected" in the console
 
## Error checking
 - the api will reject invalid json body with a 400 status and the response is "Invalid Json format!"
 - if the api could not find the json file in the server to update, it will respond with status 500 and a json body with the message saying the file could not be found

## Dependencies
 - express
 - body-parser
 - socket.io
 - mongodb(not using it right now, may use it for further development)
### Dev dependencies
 - eslint
 - eslint-config-strongloop
 - mocha
 - chai
 - supertest
