const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
mongoose.connect(
  'mongodb+srv://devhunt:w0bstbhcma@cluster0-0wtrb.mongodb.net/devhunt?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(cors());
app.use(express.json());
app.use(routes);
//Métodos get(consultar), post(criar,salvar), put(editar), delete(deletar)

//Tipos de parâmetros:
//Query Params: req.query(Filtros,ordenação,paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)(1 usuario para editar ou deletar)
//Body: req.body (Dados para criação ou alteração de um registro)
//MongoDB (Não relacional)
// app.post('/users/:id', (req, res) => {
//   //console.log(req.query);
//   //console.log(req.params);
//   console.log(req.body);
//   return res.json({ message: 'Hello Omnistack ' });
// });

app.listen(3333);
