// This is the top level index, used for deploying

// In general, these are the packages you want to run top level.

// Requires the .env file, for secrets and JWT and so forth
require("dotenv").config();
// Requires Express.JS to for building your server
const express = require("express");
// Builds and Express server by calling the Express functions
const server = express();
// CORS is used 
const cors = require("cors");
// Morgan is a package that you can use with a server for debugging / developing
const morgan = require("morgan");
// Requires client, which is a Postgres function. This will connect from whereever file it is located.
const {client} = require("......");
// Router is called from the server-side API, if there is one. 
const apiRouter = require("./api/index");
// Path is used during deploying to Render, to send files after React is built.
const path = require('path');

// Connect to the client. 
client.connect();

// Use CORS on ever server call, for safety.
server.use(cors());
// Use Morgan so that you can log the server calls.
server.use(morgan("dev"));
// Use JSON for all the server calls.
server.use(express.json());
// Use the Router from the Server side on all your calls, narrow it down in that folder if you wish.
server.use("/api", "......." );

// This joins the path name from the build file after React is built.
server.use(express.static(path.join(__dirname, 'build')));

// This sends the file from the build folder.
server.get('*', (req, res ,next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// A good error handling res/req at the top level.
// server.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send({
//     error: error.error,
//     name: error.name,
//     message: error.message,
//   });
// });

// PORT is held in the environment
const { PORT = 3000 } = process.env;

// Prove that the Port is live
server.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});

// Export the server for the rest of the folders.
module.exports = server;