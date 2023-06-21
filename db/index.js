// This is our top level database / PostgreSQL file.

// Call in Client from PostgreSQL package.
const {Client} = require('pg');
// The database URL is where your Postgres server is hosted locally, in this case.
const { DATABASE_URL = 'postgres://localhost:5432' } = process.env;
// Create a client for connecting to the server.
const client = new Client({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : undefined,

});

// This function removes all the tables from the database
const rebuildDatabase = async () => {
    try {
        await client.query(`
        DROP TABLE IF EXISTS tableName;
        `)
    } catch (error) {
        console.log('Error rebuilding the database');
        throw error;
    }
};

// This function creates a Postgres database
const createDatabase = async () => {
    try {
        await client.query(`
        CREATE TABLE IF NOT EXISTS tableName (
            These are the row names and datatypes etc
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE,
            location INTEGER NOT NULL
        );
        `,[])
    } catch (error) {
        console.log('Error creating the database');
        throw error;
    }
};

module.exports = {
    createDatabase,
    rebuildDatabase,
}