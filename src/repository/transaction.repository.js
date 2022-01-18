const { Transaction } = require('../model')

exports.create = async (transaction) => await Transaction.create(transaction)

exports.read = async (id) => await Transaction.findByPk(id)

exports.listAll = async () => await Transaction.findAll()