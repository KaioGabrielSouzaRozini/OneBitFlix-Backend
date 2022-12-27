// src/database/index.ts

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "onebitflix_development2",
  username: "postgres",
  password: "9090999548907k",
  define: {
    underscored: true,
  },
});
