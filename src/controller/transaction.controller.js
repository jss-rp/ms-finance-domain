const { TransactionRepository } = require('../repository')
const { TransactionService } = require('../service')

exports.create = async (req, res) => {
  try {
    let transaction = await TransactionService.add(req.body)

    return res.status(201).send(transaction)
  } catch(err) {
    console.error(err)
    return res.status(500).send(err)
  }
}

exports.read = async (req, res, next) => {
  let transaction = await TransactionRepository.read(req.params.id)

  return res.status(200).send(transaction)
}

exports.listAll = async (req, res) => {
  let transactions = await TransactionRepository.listAll(req.params.id)

  return res.status(200).send(transactions)
}