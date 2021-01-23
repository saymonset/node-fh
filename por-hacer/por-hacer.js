


const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile('db/data.json', data, (err) => {
        if (err){
            console.log('No se pudo grabar');
            throw new Error('No se pudo grabar', err);
        }
    });


}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHacer = [];
    }
    console.log(listadoPorHacer);
};

const crear  = (description) => {
     
    cargarDB();

    let porHacer = {
           description,
           completado: false
    };


    listadoPorHacer.push( porHacer );

    guardarDB(); 

    return porHacer;
}

 const getListado = () => {
     cargarDB();
     return listadoPorHacer;
 }

 const actualizar = (description , completado = false) => {
     cargarDB();
     
     let index = listadoPorHacer.findIndex( tarea => tarea.description === description);

     if (index >=0){
         listadoPorHacer[index].completado = completado;
         guardarDB();
         return true;
     }else{
         return false;
     }

 }

 let borrar = (description) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( e => e.description !==description);

    if ( nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

 }


    module.exports = {
        crear,
        getListado,
        actualizar,
        borrar
    }