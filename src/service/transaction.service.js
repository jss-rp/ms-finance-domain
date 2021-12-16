const { Transaction } = require('../model')
const { WalletRepository } = require('../repository')

/**
 * Verifica a transação para então decidir acrescentar ou subtrair
 * seu valor a respectiva carteira
 * 
 * @param {Transaction} transaction 
 * @returns {*}
 */
async function process(transaction) {
  const wallet = await WalletRepository.read(transaction.walletId)
  transaction.base = wallet.amount

  if(transaction.incoming) {
    transaction.predicted = wallet.amount + transaction.value
    await wallet.increment('amount', { by: transaction.value })
  } else {
    transaction.predicted = wallet.amount - transaction.value
    await wallet.decrement('amount', { by: transaction.value })
  }

  transaction.launchedAt = new Date()

  await transaction.save()
}

exports.add = async transaction => {
  if(!transaction.walletId)
    throw new Error('Wallet is missing!')
  
  const saved = await Transaction.create(transaction)
  
  await process(saved)

  return saved
}