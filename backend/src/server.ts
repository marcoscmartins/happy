import express, { request } from 'express';

import './database/connection';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        message: "hello"
    });
});

app.listen(3333);

// Parametros: 
// query params = name=fulano
// request.params

// route params = \1
// request.query

// body = corpo da requisição
// request.body