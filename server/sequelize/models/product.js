module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    store: {
      type: Sequelize.STRING,
    },
    creatorId: {
      type: Sequelize.INTEGER,
    },
    tagId: {
      type: Sequelize.STRING,
    },
    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  return Product;
};
