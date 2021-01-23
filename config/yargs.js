
const description = {
    demand:true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
.command(
    'crear', 'Crear un elemento por hacer',{ 
        description
    }
)
.command('actualizar', 'Actualiza el estado completado de una tarea',{
    description,
    completado
}).command('borrar', 'Boorar una tarea',{
    description
})
.help()
.argv;

module.exports = { argv };
 
