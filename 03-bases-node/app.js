console.clear();

const fs = require('fs');

console.log('==== tabla del cinco ====')

const base = 5;
let salida = '';

for (let i = 1; i <=10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla-5.txt creada');
})