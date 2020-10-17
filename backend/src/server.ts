import express, { request } from 'express';
import './database/connection';
<<<<<<< HEAD
import path from 'path';
=======
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe

import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
<<<<<<< HEAD
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
=======
>>>>>>> 460f7bacc0d5999f6ac6c00986b5a619647559fe

app.listen(3333);

// Parametros: 
// query params = name=fulano
// request.params

// route params = \1
// request.query

// body = corpo da requisição
// request.body