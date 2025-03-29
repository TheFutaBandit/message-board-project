const {Client} = require('pg');
const { argv } = require('node:process');

const create_table_userMessages = `
    CREATE TABLE IF NOT EXISTS user_messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user VARCHAR (255),
        message VARCHAR(255),
        added TIMESTAMPTZ 
    )
`;

async function main(connectionArg) {
    console.log('seeding...');
    const pg_client = new Client({
        connectionString : connectionArg,
    })
    await pg_client.connect();
    await pg_client.query(connectionArg);
    await pg_client.end();
    console.log("done");
}

main(argv[2]);