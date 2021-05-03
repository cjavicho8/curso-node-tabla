// const fs = require('fs');

// const numTabla = 8;
// const numFinal = 10;
// let salida = '';

// console.clear();
// console.log('====================');
// console.log(`   TABLA DEL: ${ numTabla }`);
// console.log('====================');

// for (let index = 1; index <= numFinal; index++) {
//     salida += `${ numTabla } x ${ index } = ${ numTabla * index}\n`;
// }

// console.log( salida );

// // fs.writeFile(`tabla-${numTabla}.txt`, salida, ( err ) => {
// //     if( err ) throw err;
// //     console.log(`Tabla del ${ numTabla } creado!`);
// // })

// fs.writeFileSync(`tabla-${ numTabla }.txt`, salida);

// console.log(`Tabla del ${ numTabla } creado!`);

const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log("yargs: base", argv.base);

// const [,, arg3 = 'base=8'] = process.argv;
// const [, base = 8] = arg3.split('=');


// const base = 8;

// crearArchivo( base )
//     .then( nombre => console.log(nombre, 'creado!'))
//     .catch( err => console.log(err));

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombre => console.log(nombre.rainbow, 'creado!'))
    .catch( err => console.log(err));



