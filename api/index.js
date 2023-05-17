// This is our top-level api file.

// This you should only need this during development.
// Refer to top level index.js for usage.
const express = require('express');
const cors = require('cors');

// This should stay here, as JWT is needed on this side of the API.
const jwt = require("jsonwebtoken");

// We still need the env file for secrets.
require('dotenv').config();
const { JWT_SECRET } = process.env;

// You will need the PostgreSQL client imported.
const {client} = require('.........');

// Create the Router for sending API calls.
const router = express.Router();
// Make our Express calls JSON.
router.use(express.json());
// Use CORS for safety.
router.use(cors());

// If using BCRYPT, this is a good place to instal it for passwords or email hashing.


// This function will console.log all of our API calls, which can help debugging.
apiRouter.use((request, response, next) => {
    console.log('request.method: ', request.method);
    console.log('request.url: ', request.url);
    // next() moves the response to the next appropriate call.
    next();
});

// This call will tell us if our server is running.
apiRouter.get('/health', async (request, response, next) => {
    try {
        response.send('All good!')
    } catch (error) {
        throw error;
    }
});

/*

This is where your server calls will go, or other routers for /users /posts etc.

*/

// You will need the router somewhere else, undoubtedly.
module.exports = router;