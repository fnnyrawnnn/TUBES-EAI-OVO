const { DECIMAL } = require('sequelize');
const {User} = require('../../db/models');
const {Transaction} = require('../../db/models');

module.exports = {
     getAllUsers: async (req, res, next) => {
          try {
               const users = await User.findAll();
               res.status(200).json({
                    message: 'Sukses menampilkan semua data user',
                    data:users,
               });
          } catch (err){
               next(err);
          }
     },
     createUsers: async (req, res, next) => {
          try {
               const data = await Transaction.findAll({
                    attributes: [
                         "id",
                         "user_name",
                         "phone_number",
                         "money_out",
                         "status",
                    ]
               });
     
               const money_balance = 200000;
               const pin = "123123";
               for (i = 0; i < data.length; i++) {
                    User.create({
                         money_balance: money_balance,
                         pin: pin,
                         id_transaction: data[i].id,
                         user_name: data[i].user_name,
                         phone_number: data[i].phone_number,
                         total_price: data[i].money_out,
                         status: data[i].status,
                    });
                    }
                    
                    res.send({
                         message: 'Sukses menambahkan data user',
                    });
          } catch (err){
               next(err);
          }
     },
}