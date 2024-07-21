var DataTypes = require("sequelize").DataTypes;
var books = require("./Book");

function initModels(sequelize) {
  let Book = books(sequelize, DataTypes);

  return {
    Book,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
