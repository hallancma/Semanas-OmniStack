const knex = require('knex');
const configuration = require('../../knexfile');
const confi =
  process.env.NODE_ENV === 'teste'
    ? configuration.teste
    : configuration.development;
const connection = knex(confi);

module.exports = connection;
