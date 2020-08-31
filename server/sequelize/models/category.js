module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("Category", {
    name: {
      type: Sequelize.STRING,
    },
    creator: {
      type: Sequelize.INTEGER,
    },
    products: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  });

  return Category;
};
