const http = require('http')

///const { listenerCount } = require('process')

//cria o objeto server
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url
    res.write(`<h1>Página: <b>${infoUrl}</b></h1> <p>Hello World Node JS - São paulo, 31 de maio de 2022</p>`)
    res.end()//finaliza a resposta
}).listen(8080)//hbilita a porta 8080 (http://localhost:8080)

//caminhos locais : file:///home/home/nome-do-usuario/pastaX