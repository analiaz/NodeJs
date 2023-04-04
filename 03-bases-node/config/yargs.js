const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla de multiplicar en consola'
            }
            )
            .check( ( argv, options ) => {
                if (isNaN( argv.b ) ){
                    throw 'la base debe ser un numeros'
                }
                return true;
            })
            .argv;

            module.exports = argv;