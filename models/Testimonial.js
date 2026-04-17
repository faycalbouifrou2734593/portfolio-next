import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Testimonial = sequelize.define("Testimonial", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Testimonial;