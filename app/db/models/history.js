'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init({
    id_transaction_done: DataTypes.INTEGER,
    virtual_account_transaction: DataTypes.STRING,
    transaction_done_date: DataTypes.STRING,
    transaction_amount: DataTypes.INTEGER,
    transaction_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};