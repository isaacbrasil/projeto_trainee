const express = require ('express');

const bodyParser = require('body-parser');

const app = express();

//Entende requisições em json que sao enviadas a api
app.use(bodyParser.json());

//Entende e decodifica parametros url passados a api
app.use(bodyParser.urlencoded({ extended: false}));

//repassa a classe 'app' pro authController (controle de autenticação)
require('./controllers/authController')(app);

app.listen(3000);
