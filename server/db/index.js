const { Pool } = require('pg')
const pool = new Pool({
    user: 'tingchuanyuan',
    host: 'localhost',
    database: 'yelp',
    password: 'root',
    port: 5432,
  })
module.exports = {
  query: (text, params) => pool.query(text, params),
}