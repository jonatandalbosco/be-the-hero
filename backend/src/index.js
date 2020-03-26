const express = require('express');
const cors = require('./cors'); 
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 * 
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma Informação do backend
 * POST: Criar uma informaçao no backend
 * PUT: Alterar uma informaçao no backend
 * DELETE: Deletar uma informaçao no backend
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params:  Parametros nomeados enviados na rota apos o "?" (Filtros,paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body:  Corpo da requisiçao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SqLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc...
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users).select('*').where()
   */



