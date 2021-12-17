/**
 * @typedef {object} Profile
 * @property {string} firstName.required - Primeiro nome
 * @property {string} lastName.required - Sobrenome
 * @property {string} email - Endereço de email
 */

/**
 * @typedef {object} Wallet
 * @property {number} amount - Saldo inicial - double
 * @property {number} profileId.required - Perfil dono da carteira
 */

/**
 * @typedef {object} Transaction
 * @property {number} value - Valor - double
 * @property {boolean} incoming.required - Tipo
 * @property {number} walletId.required - Carteira a ser modificada
 */

/**
 * POST /profile
 * @tags Profile
 * @summary Cria um perfil
 * @param {Profile} request.body.required - Perfil a ser criado
 * @return {object} 200 - Sucesso
 * @example request - exemplo
 * {
 *   "firstName": "John",
 *   "lastName": "Doe",
 *   "email": "john@doe.com"
 * }
 */

/**
 * GET /profile/{id}
 * @tags Profile
 * @summary Busca perfil por Id
 * @param {number} id.path.required - Id do perfil
 * @return {object} 200 - Sucesso
 */

/**
 * POST /wallet
 * @tags Wallet
 * @summary Cria uma carteira
 * @param {Wallet} request.body.required - Carteira a ser criada
 * @return {object} 200 - Sucesso
 * @example request - exemplo
 * {
 *     "amount": 300,
 *     "profileId": 1
 * }
 */

/**
 * GET /wallet/{id}
 * @tags Wallet
 * @summary Busca carteira por Id
 * @param {number} id.path.required - Id da carteira
 * @return {object} 200 - Sucesso
 */


/**
 * POST /transaction
 * @tags Transaction
 * @summary Cria uma transação
 * @param {Transaction} request.body.required - Transação a ser criada
 * @return {object} 200 - Sucesso
 * @example request - exemplo
 * {
 *     "value": 0.3,
 *     "walletId": 1,
 *     "incoming": false
 * }
 */