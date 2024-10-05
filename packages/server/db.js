import Sequelize from "sequelize";

const sequelize = new Sequelize({
  define: {
    timestamps: false,
  },
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  dialect: "postgres",
});

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
}

export default sequelize;
