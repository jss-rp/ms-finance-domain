const { Bank } = require('../model')

exports.create = async (bank) => await Bank.create(bank)

exports.read = async (id) => await Bank.findByPk(id)

exports.readAll = async () => await Bank.findAll()