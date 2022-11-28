const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Categories => field => ['type', 'color']
const categories_model = new Schema({
    type: {type: String, default: "Investment"},
    color: {type: String, default: '#FCBE44'}
})

//Transactions => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name: {type: String, default: "Anonymous"},
    type: {type: String, default: "Investment"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

// Bank => field => ['name', 'amount', 'date']
const bank_model = new Schema({
    name: {type: String, default: "Anonymous"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Categories = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transaction_model)
const Bank = mongoose.model('bank', bank_model)

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction,
    Bank
}