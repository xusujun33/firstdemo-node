'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todos.init({
    title: DataTypes.STRING,
    deadline: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todos',
  });
  return todos;
};