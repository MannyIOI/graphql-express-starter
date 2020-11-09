// Update with your config settings.
// change something 0123
require("dotenv").config();
// console.log(process.env.DATABASE_URL)
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "",
      user: "manny",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgres",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
