const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false
            }
            )
            .check( ( argv, options ) => {
                if (isNaN( argv.b ) ){
                    throw 'la base debe ser un numeros'
                }
                return true;
            })
            .argv;


console.clear();

//const[,,arg3 = 'base=5'] =  process.argv;
//const [, base] = arg3.split('=');

//const base = 8;

console.log(argv);
crearArchivo( argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
