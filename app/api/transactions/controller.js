const {Transaction} = require('../../db/models');
const {Payment} = require('../../db/models');

module.exports = {
     getAllTransactions: async (req, res, next) => {
          try {
               const transactions = await Transaction.findAll();

               res.status(200).json({
                    message: 'Sukses menampilkan semua data transaction',
                    data:transactions,
               });
          } catch (err){
               next(err);
          }
     },
     createTransactions: async (req, res, next) => {
          try {
               const data = await Payment.findAll({
                    attributes: [
                         "id",
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
                    Transaction.create({
                         transaction_date: transaction_date,
                         id_payment: data[i].id,
                         virtual_account: data[i].virtual_account,
                         phone_number: data[i].phone_number,
                         money_out: data[i].total_price,
                         status: data[i].status,
                    });
                    }
                    
                    res.send({
                         message: 'Sukses menambahkan data transaction',
                    });
          } catch (err){
               next(err);
          }
     },
}