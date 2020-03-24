// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('======================'.green);

    if (!Number(base)) {
        reject(`El valor ingresado ${ base } para base no es un número`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor ingresado ${ limite } para limite no es un número`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}