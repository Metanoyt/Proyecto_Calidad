//Metodo que genera el texto(postgresql) necesario para hacer la busqueda por nombre
function busquedaNombre(palabraClave){
    var query ='Select * from Cancion where nombre_cacion  like ';
    query + '%'+palabraClave+'%';
    return query;
}
module.exports.busquedaNombre = busquedaNombre;