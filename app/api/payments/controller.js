const {Payment} = require('../../db/models');
const superagent = require("superagent");

module.exports = {
     createPayments: async (req, res, next) => {
          try {
               const dataCommerce = await superagent.get(
                    "https://ecommerceeai.000webhostapp.com/api/payments"
               );

               const data = dataCommerce.body;;

               for(i = 0; i< data.length; i++){
                    Payment.create({
                         virtual_account: data[i].virtual_account,
                         phone_number: data[i].no_telp,
                         total_price: data[i].total_harga,
                         status: data[i].status_pembayaran,
                    })
               }
               res.send("data berhasil diintegrasi");
          } catch (err){
               next(err);
          }
     },
     getAllPayments: async (req, res, next) => {
          try {
               const payments = await Payment.findAll();

               res.status(200).json({
                    message: 'Sukses menampilkan semua data payment',
                    data: payments
               });
          } catch (err){
               next(err);
          }
     },
}