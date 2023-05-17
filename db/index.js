// This is our top level database / PostgreSQL file.

// Call in Client from PostgreSQL package.
const {Client} = require('pg');
// The database URL is where your Postgres server is hosted locally, in this case.
const { DATABASE_URL = 'postgres://localhost:5432/rss-feed' } = process.env;
// Create a client for connecting to the server.
const client = new Client({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : undefined,

});