class GeneradorLista{

    constructor(){}

    //Metodo que genera el texto(postgresql) necesario para hacer la busqueda por nombre
    busquedaNombre(palabraClave){
        var query ='Select * from Cancion where nombre_cacion  like ';
        query + '%'+palabraClave+'%';
        return query;
    }


}