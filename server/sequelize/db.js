const { Sequelize } = require("sequelize");
const dbConfig = require("./db.config");

const sequelize = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  dialect: dbConfig.dialect,
  host: dbConfig.host,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./models/product")(sequelize, Sequelize);
db.categories = require("./models/category")(sequelize, Sequelize);
db.users = require("./models/user")(sequelize, Sequelize);

// db.categories.hasMany(db.products);
// db.products.belongsTo(db.categories, {
//   foriegnKey: "categoryId",
// });

module.exports = db;
