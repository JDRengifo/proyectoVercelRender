import React from "react";

function validate(input){
    const error = {};
    const regexNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
  
  
    console.log('input',input)
    console.log('error',error)
    //validacion user name
    if (!regexNombre.test(input.nombre)) {
        error.nombre = 'Debe comenzar con una letra mayúscula.'
    }
    if (!input.nombre) {
        error.nombre = 'El nombre no puede estar vacio.'
    }
    if (input.nombre.length > 35 ) {
        error.nombre = 'Debe tener menos de 35 caracteres.'
    }
  
    //validacion de la duración
    if (Number(input.duracion) === 0 || Number(input.duracion) < 0) {
        error.duracion = "Debe ingresar un numero de horas."
    }

    //validacion de la dificultad
    if (input.dificultad>6 || input.dificultad<1 || !Number) {
        error.dificultad = "Debe estar entre 1 y 6 de categoria"
    }
    
    //validacion de la temporada
    if (input.temporada === "") {
        error.temporada = "Debe elegir una opción"
    }

    //validacion de Paises
    if (input.paises.length === 0 ) {
        error.paises = "Debe elegir al menos un País"
    }
    
    return error;
  }
  export default validate;
  