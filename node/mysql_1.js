const mysql = require('mysql')

const conn  = mysql.createConnection(
    {
        host:'localhost',
        user:'Luiz',
        password: '991273911aA@'
    }
)

conn.connect(function(err){
    if(err) throw err
    console.log("Mysql Conectado")
    conn.query(sql,function(err,result){
        if(err) throw err
        console.log(`Query : ${result} `)
    })

})