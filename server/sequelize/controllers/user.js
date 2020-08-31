const db = require("../db");
const User = db.users;

exports.create = ({ name, password }) => {
  const user = {
    name,
    password,
  };

  return User.create(user)
    .then((data) => data.dataValues)
    .catch((err) => {
      console.log("Error while creating user: ", err);
    });
};

exports.readAll = () => {
  return User.findAll()
    .then((data) => data)
    .catch((err) => {
      console.log("Error when finding users: ", err);
    });
};

exports.read = ({ id }) => {
  return User.findOne({ where: { id: id } })
    .then((data) => data)
    .catch((err) => {
      console.log("Error when finding user: ", err);
    });
};
