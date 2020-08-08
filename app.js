const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTable(argv.base, argv.limite)
            .then((lista) => {
                console.log(lista);
            }).catch(e => console.log(e));
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log('Archivo creado', colors.blue(`${ archivo }`));
        }).catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}