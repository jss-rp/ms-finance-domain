/**
 * @typedef {object} Transaction
 * @property {number} value - Valor - double
 * @property {boolean} incoming.required - Tipo
 */

/**
 * POST /api/transaction
 * @tags Transaction
 * @summary Cria uma transação
 * @param {Transaction} request.body.required - Transação a ser criada
 * @return {object} 200 - Sucesso
 * @example request - exemplo
 * {
 *     "value": 0.3,
 *     "incoming": false
 * }
 */

/**
 * GET /api/transaction
 * @tags Transaction
 * @summary Lista todas as transações
 * @return {array<Transaction>} 200 - Sucesso
 * @example request - exemplo
 */