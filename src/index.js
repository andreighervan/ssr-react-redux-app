import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';
import rendered from './helpers/rendered';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send(rendered);

});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});