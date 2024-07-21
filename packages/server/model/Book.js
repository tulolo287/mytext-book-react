const db = require('../db')
const DataTypes = require('sequelize').DataTypes

const Book = db.sequelize.define('books', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  thumbnail: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Book
