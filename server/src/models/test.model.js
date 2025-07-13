import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Test = sequelize.define("Test", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
});

export default Test;
