const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false ) => {

    return new Promise( ( resolve, reject) => {

        let salida = '';
    
        for (let i = 1; i <=10; i++) {
            salida += `${base} ${'x'.green} ${i} = ${base * i}\n`;
        }
        
        if ( listar ) {
            console.log('======'.green)
            console.log(' Tabla del:'.yellow, colors.blue(base));
            console.log(salida);
           }
   

        
        fs.writeFileSync(`tabla-${ base }.txt`, salida);
        
        resolve(`tabla-${ base }.txt`);
    
    })
}

module.exports = {
    crearArchivo
}