const { Transaction } = require('../model')

exports.create = async (transaction) => await Transaction.create(transaction)

exports.read = async (id) => await Transaction.findByPk(id)

exports.readByBank = async (bankId) => await Transaction.findAll({ where: { bankId } })

exports.readByCard = async (cardId) => await Transaction.findAll({ where: { cardId } })

exports.readByTag = async (tagId) => await Transaction.findAll({ where: { tagId } })

exports.readAll = async () => await Transaction.findAll()