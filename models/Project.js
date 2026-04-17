import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Project;