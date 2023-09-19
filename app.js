// iniciar conexion con el serviods usando EM6
const express = require('express');
import express from 'express';

// iniciar conexion con el servidor
const app = express();

// configurar el puerto
app.set('port', process.env.PORT || 3000);

// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

if (1 === 1) {
    console.log("Hola mundo");
} else {
    console.log("Adios mundo");
}
