const sqlite3 = require('sqlite3')
const knex = require('knex')


const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'reports.db',
    }
})

module.exports = connectedKnex;
