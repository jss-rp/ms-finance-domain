const { Payment } = require('../model')

exports.create = async (payment) => await Payment.create(payment)

exports.read = async (id) => await Payment.findByPk(id)

exports.readByPurchase = async (purchaseId) => await Payment.findAll({ where: { purchaseId } })