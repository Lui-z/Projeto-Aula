const http = require('http')
const url = require('url')
//cria o objeto server
http.createServer(function(req,res){
    //escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    let infoUrl = req.url
    let q = url.parse(infoUrl,true).query
    let txtResult = `Título: ${q.titulo} - Ator: ${q.ator}`
    res.write(`<h1>Página: <b>${infoUrl}</b></h1> <p>Hello World Node JS - São Paulo, 31 de Maio de 2022</p>`)
    res.end(txtResult)//finaliza a resposta
}).listen(8080)//habilita a porta 8080 - 
//Exemplo : (http://localhost:8080/?titulo=Missão Impossível&ator=Tom Cruise)

//caminhos locais não serão mais utilizados : file:///home/nome-do-usuario/pastaX