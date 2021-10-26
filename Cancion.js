//Modelo para la facilitacion y organizacion del movimiento de los datos entre 
//la base de datos y los otros modulos 
class Cancion{
    constructor(nombre,genero,duracion,id,idAlbum,nombreAutor){
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
        this.id = id;
        this.idAlbum = idAlbum;
        this.nombreAutor = nombreAutor;
    }

    get nombre(){
        return this.nombre;
    }

    get genero(){
        return this.genero;
    }

    get duracion(){
        return this.duracion;
    }

    get id(){
        return this.id;
    }

    get idAlbum(){
        return this.idAlbum;
    }

    get nombreAutor(){
        return this.nombreAutor;
    }
}

export default Cancion;