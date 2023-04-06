const { inquirerMenu, pausa } = require('./helpers/inquirer');
const colors = require('colors');

console.clear();

const main = async() => {
    
    console.log('hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();

        await pausa();

    } while (opt !== '0'); 

}

main();