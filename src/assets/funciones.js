const getLista = (nombre) => {
    const lista = document.getElementsByName(nombre);
    return lista;
}

const mostrarSlides = (i, arr, clase) =>{
            
    for (let index = 0; index < arr.length; index++){
        let tokens = arr[index].classList;
        tokens.add(clase);
        let newtoken = arr[i].classList;
        newtoken.remove(clase);
    }
}

//estas dos funciones las tengo comentadas en los componentes Certificados, Experiencias y Proyectos. No tengo idea por qué no andan si el código es el mismo que está en las action de los botones.

const chequearAnterior = (i, arr) =>{
    if (i > arr.length){
        i = 0;
    }

    if (i < 0){
        i = arr.length-1;
    }
}

const chequearSiguiente = (i, arr) => { 
    if (i > arr.length-1){
        i = 0
    }

    if (i < 0){
        i = arr.length
    }
}

export {getLista, mostrarSlides, chequearAnterior, chequearSiguiente};