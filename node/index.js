const http = require('http')
const { listenerCount } = require('process')

//cria o objeto server
http.createServer(function(req,res){
    res.write('Hello World Node JS')
    res.end()//finaliza a resposta

}).listen(8080)//hbilita a porta 8080 (http://localhost:8080)

//caminhos locais : file:///home/home-nome-do-usuario/pastaX