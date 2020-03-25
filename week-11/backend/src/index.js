const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar/Listar uma informção do back-end
 * POST:Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE:Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 *
 * Query: Parâmetros nomeados nviados na rota após o simbolo de interrogação
 * ? (Filtros,paginação)
 * Route Params: Parâmetros utilizados para identicar recursos
 * Request Body:Corpo da requiição, utlizado para criar ou atlerar recursos
 */

/**
 * SQL: MySQL, SQLite, Oracle
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */
app.use(cors());
app.use(routes);
app.listen(3333);
