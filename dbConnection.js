const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "eventdb",
  password: "Yogibear1", // Change this to your PostgreSQL password
  port: 5432,
});

module.exports = pool;
