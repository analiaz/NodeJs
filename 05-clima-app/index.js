const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {
    
    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch(opt) {
            case 1:

                const lugar = await leerInput('Ciudad; ');
                console.log(lugar);

                console.log('\nInformacion de la ciudad\n');
                console.log('Ciudad;', );
                console.log('Lat;', );
                console.log('Long;', );
                console.log('Tempreatura;', );
                console.log('Minima;', );
                console.log('Maxima;', );

                

                break;
        }

        if (opt !== 0) await pausa();
    } while ( opt !== 0)
}

main();