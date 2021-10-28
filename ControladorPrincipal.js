const {Client} = require('pg');
const login = require('./Login.js');

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "4121",
    database: "postgres"
})

function Login(user,pass){
    client.connect();

    
    client.query(login.login(user,pass),(err,res)=>{
    
        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message);
        }
        client.end;
    })
}

