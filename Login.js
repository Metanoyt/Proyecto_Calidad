//Metodo que genera el texto(postgresql) necesario para hacer la verificacion para el Login

function login(usuario,contrasena){
    var query ='Select nombre_usuario, contrasena_usuario from Usuario where nombre_usuario = ' + "'" + usuario + "'" + 'and contrasena_usuario = ' + "'" + contrasena + "';";
    return query;
}
module.exports.login = login;