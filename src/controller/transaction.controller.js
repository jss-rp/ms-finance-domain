const repository = require('../repository/transaction.repository')

exports.create = async (req, res) => {
  let transaction = await repository.create(req.body)

  return res.status(201).send(transaction)
}

exports.read = async (req, res, next) => {
  let transaction = await repository.read(req.params.id)

  return res.status(200).send(transaction)
}

exports.listAll = async (req, res) => {
  let transactions = await repository.listAll(req.params.walletId)

  return res.status(200).send(transactions)
}