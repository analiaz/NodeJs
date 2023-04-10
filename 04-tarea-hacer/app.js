const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require('./helpers/inquirer');
const colors = require('colors');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const main = async() => {

    let opt = '';
    
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ){
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        //imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
            break;
            case '2':
                tareas.listadoCompleto();
            break;
            case '3': //listar completadas
                tareas.listarPendientesCompletadas(true);
            break;
            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            case '5': // listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            case '6': // borrar
                const id = await listadoTareasBorrar( tareas.listadoArr);
                const ok = await confirmar('¿Estas seguro?');
                if (ok) {
                    tareas.borrarTarea( id );
                    console.log('tarea borrada');
                }
            break;
        }

        guardarDB(tareas.listadoArr);
        
        await pausa();

    } while (opt !== '0'); 

}

main();