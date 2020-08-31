module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    categories: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
  });

  return User;
};
