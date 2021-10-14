const Transaction = require('../model/transaction.model')

exports.create = async (transaction) => await Transaction.create(transaction)

exports.read = async (id) => await Transaction.findByPk(id)

exports.listAll = async (walletId) => await Transaction.findAll({where: { walletId }})