const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const routes = require('./routes');
const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: true }));

// middlewares.setupApp(app); Creo que va aqui pero no detecta middlewares 
routes.setup(app);



app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });