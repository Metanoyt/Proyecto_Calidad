const {Client} = require('pg');
const generador = require('./GeneradorLista.js');

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "4121",
    database: "postgres"
})

function requestByName(key){
    client.connect();

    client.query(generador.busquedaNombre(key),(err,res)=>{
    
        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message);
        }
        client.end;
    })
}





