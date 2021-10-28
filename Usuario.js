//Modelo para la facilitacion y organizacion del movimiento de los datos entre 
//la base de datos y los otros modulos 
class Usuario{
    constructor(nombre,id,contrasena){
        this.nombre = nombre;
        this.id = id;
        this.contrasena = contrasena;
    }

    get nombre(){
        return this.nombre;
    }

    get id(){
        return this.id;
    }

    get contrasena(){
        return this.contrasena;
    }

}

export default Usuario;