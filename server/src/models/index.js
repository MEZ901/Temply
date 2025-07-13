import sequelize from "../config/database.js";
import Test from "./test.model.js";

const db = {};

db.sequelize = sequelize;
db.Sequelize = sequelize.Sequelize;

db.Test = Test;

export default db;
