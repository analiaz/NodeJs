const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const colors = require('colors');
const Tareas = require('./models/tareas');
const { guardarDB } = require('./helpers/guardarArchivo');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {
        //imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
            break;
            case '2':
                console.log( tareas.listadoArr );
            break;
        }

        guardarDB(tareas.listadoArr);
        
        await pausa();

    } while (opt !== '0'); 

}

main();