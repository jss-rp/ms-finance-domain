const { Card } = require('../model')

exports.create = async (card) => await Card.create(card)

exports.read = async (id) => await Card.findByPk(id)

exports.readByBank = async (bankId) => await Card.findAll({ where: { bankId }})

exports.readAll = async () => await Card.findAll()