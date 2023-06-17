const {TransactionDone} = require('../../db/models');
const {User} = require('../../db/models');

module.exports = {
     getAllTransactionsDone: async (req, res, next) => {
          try {
               const transactionDone = await TransactionDone.findAll();

               res.status(200).json({
                    message: 'Sukses menampilkan semua data transaksi selesai',
                    data:transactionDone,
               });
          } catch (err){
               next(err);
          }
     },
     createTransactionsDone: async (req, res, next) => {
          try {
               const data = await User.findAll({
                    attributes: [
                         "id",
                         "money_balance",
                         "pin",
                         "virtual_account",
                         "phone_number",
                         "total_price",
                         "status",
                    ]
               });
     
               const date = new Date();
               const menit = date.getMinutes();
               const jam = date.getHours();
               const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
               const hari = days[date.getDay()];
               const tanggal = date.getDate();
               const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];
               const bulan = months[date.getMonth()];
               const tahun = date.getFullYear();
               const transaction_date = `${hari}, ${tanggal} ${bulan} ${tahun}, ${jam}:${menit}`;
               
               for (i = 0; i < data.length; i++) {
                    const money_balance = data[i].money_balance;
                    const money_out = data[i].total_price;
                    const pin = data[i].pin;
                    let statuses = '';
                    let money_update = 0;
                    let {pins} = req.body;

                    function balances(){
                         if(money_balance >= money_out && pin == pins){
                              statuses = 'successful payment';
                              money_update = money_balance - money_out;
                              const update = [statuses, money_update];
                              return update;
                         }else{
                              statuses = 'payment failed'
                              money_update = money_balance;
                              const update = [statuses, money_update];
                              return update;
                         };
                    }
                    let balance = balances();

                    TransactionDone.create({
                         transaction_done_date: transaction_date,
                         id_user: data[i].id,
                         money_balance: balance[1],
                         virtual_account: data[i].virtual_account,
                         phone_number: data[i].phone_number,
                         total_price: data[i].total_price,
                         status: balance[0],
                    });
                    }
                    
                    res.send({
                         message: 'Sukses menambahkan data transaction done',
                    });
          } catch (err){
               next(err);
          }
     },
}