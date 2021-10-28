//Metodo que genera el texto(postgresql) necesario para hacer la busqueda por nombre
function busquedaNombre(palabraClave){
    var query ='Select * from Cancion where nombre_cacion  like ' + "'%"+palabraClave+"%';";
    return query;
}

//Metodo que genera el texto(postgresql) necesario para seleccionar una cancion recomendada
function recomendacion(idLista){
    var query = "SELECT nombre_cancion, genero_cancion, nombre_autor, duracion FROM Cancion LEFT JOIN" +
    "(select id_album as idalb, id_cancion as idcan from Cancion  full join" + 
    "(select id_cancion as idc from Lista_reproduccion where id_lista = " + idLista +
    ") as lr ON  idc = id_cancion WHERE nombre_cancion IS NOT NULL) as lalbum on  idalb = id_album"+
    "where idcan != id_cancion;";
    return query;
}




module.exports.busquedaNombre = busquedaNombre;
module.exports.recomendacion = recomendacion;