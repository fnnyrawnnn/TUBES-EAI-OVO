'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    money_balance: DataTypes.INTEGER,
    pin: DataTypes.STRING,
    id_transaction: DataTypes.INTEGER,
    virtual_account: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};