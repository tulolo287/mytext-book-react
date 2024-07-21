const Sequelize = require("sequelize");


const sequelize = new Sequelize({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  dialect: "postgres",
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
};

exports.sequelize = sequelize
exports.dbConnect = dbConnect


