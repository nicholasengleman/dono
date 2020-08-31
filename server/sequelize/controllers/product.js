const db = require("../db");
const Product = db.products;

exports.create = ({ name, price, description, store, categoryId, userId, tagId }) => {
  const product = {
    name,
    price,
    description,
    store,
    categoryId,
    userId,
    tagId,
  };

  return Product.create(product)
    .then((data) => data.dataValues)
    .catch((err) => {
      console.log("Error while creating product: ", err);
    });
};

exports.readAll = () => {
  return Product.findAll()
    .then((data) => data)
    .catch((err) => {
      console.log("Error when finding products: ", err);
    });
};

exports.read = () => {
  return Product.findAll();
};

exports.addLike = ({ id }) => {
  return Product.increment("likes", { by: 1, where: { id: id } })
    .then((data) => data[0][0][0].likes)
    .catch((err) => {
      console.log("error: ", err);
    });
};
