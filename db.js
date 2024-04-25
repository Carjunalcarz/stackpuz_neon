const Sequelize = require("sequelize");
const config = require("./config").db;
const moment = require("moment");
const util = require("./util");
const types = require("pg").types;

module.exports.knex = require("knex")({
  client: "postgresql",
  wrapIdentifier: (value) => value,
});

// Configure PostgreSQL type parsers
types.setTypeParser(types.builtins.BYTEA, (value) =>
  Buffer.from(value.substr(2), "hex").toString()
);
types.setTypeParser(types.builtins.TIME, (value) => util.formatTime(value));
types.setTypeParser(types.builtins.TIMESTAMP, (value) =>
  util.formatDateTime(value)
);
Sequelize.postgres.DATEONLY.parse = (value) => util.formatDate(value);

// Initialize Sequelize with SSL options for PostgreSQL connection
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Adjust as needed for your SSL configuration
    },
  },
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  quoteIdentifiers: false,
  logging: false,
  timezone: moment().format("Z"),
});

module.exports.db = sequelize;
