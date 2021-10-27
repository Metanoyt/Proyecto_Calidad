import GeneradorLista from "./GeneradorLista";

const {Client} = require('pg');

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "4121",
    database: "postgres"
})

let generadorLista = new GeneradorLista();

function requestByName(key){
    client.connect();

    client.query(generadorLista.busquedaNombre(key),(err,res)=>{
    
        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message);
        }
        client.end;
    })
}





