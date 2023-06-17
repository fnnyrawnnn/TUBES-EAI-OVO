const {TransactionDone} = require('../../db/models');
const {History} = require('../../db/models');

module.exports = {
     getAllHistories: async (req, res, next) => {
          try {
               const histories = await History.findAll();

               res.status(200).json({
                    message: 'Sukses menampilkan semua data histories sukses',
                    data:histories,
               });
          } catch (err){
               next(err);
          }
     },
     createHistories: async (req, res, next) => {
          try {
               const data = await TransactionDone.findAll({
                    attributes: [
                         "id",
                         "virtual_account",
                         "transaction_done_date",
                         "total_price",
                         "status",
                    ]
               });
     
               for (i = 0; i < data.length; i++) {
                    History.create({
                         id_transaction_done: data[i].id,
                         virtual_account_transaction: data[i].virtual_account,
                         transaction_done_date: data[i].transaction_done_date,
                         transaction_amount: data[i].total_price,
                         transaction_status: data[i].status,
                    });
                    }
                    
                    res.send({
                         message: 'Sukses menambahkan data histories',
                    });
          } catch (err){
               next(err);
          }
     },
}