// database.cjs
require("dotenv").config({ path: ".env.development" });

module.exports = {
  development: {
    driver: 'pg',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
};
