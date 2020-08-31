const db = require("./sequelize/db");
const apollo = require("./apollo/server");

apollo();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Database and tables created!");
});
