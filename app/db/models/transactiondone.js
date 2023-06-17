'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransactionDone.init({
    transaction_done_date: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    money_balance: DataTypes.INTEGER,
    virtual_account: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransactionDone',
  });
  return TransactionDone;
};