import express, { request } from 'express';
import './database/connection';
import path from 'path';

import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);

// Parametros: 
// query params = name=fulano
// request.params

// route params = \1
// request.query

// body = corpo da requisição
// request.body