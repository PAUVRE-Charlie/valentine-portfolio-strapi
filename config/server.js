const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  host: process.env.DATABASE_URL ? config.host : env("HOST", "0.0.0.0"),
  port: process.env.DATABASE_URL ? config.port : env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
