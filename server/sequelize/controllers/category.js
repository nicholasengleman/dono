const db = require("../db");
const Category = db.categories;

exports.create = ({ name, creator }) => {
  const category = {
    name,
    creator,
  };

  return Category.create(category)
    .then((data) => data.dataValues)
    .catch((err) => {
      console.log("Error when creating category.", err);
    });
};

exports.readAll = () => {
  return Category.findAll()
    .then((data) => data)
    .catch((err) => {
      console.log("Error when finding categories: ", err);
    });
};

exports.readSome = () => {
  return Category.findAll()
    .then((data) => data)
    .catch((err) => {
      console.log("Error when finding categories: ", err);
    });
};
