const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {

    return new Promise( ( resolve, reject) => {

        let salida, consola = '';
    
        for (let i = 1; i <=hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;

        }
        
        if ( listar ) {
            console.log('======'.green)
            console.log(' Tabla del:'.yellow, colors.blue(base));
            console.log(consola);
           }
   

        
        fs.writeFileSync(`tabla-${ base }.txt`, salida);
        
        resolve(`tabla-${ base }.txt`);
    
    })
}

module.exports = {
    crearArchivo
}