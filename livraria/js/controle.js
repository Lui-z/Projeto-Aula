//caso coloque a chamada dentro do tg <head> use 
//window.onload () {... seu código aqui}
console.log("Hello World")
console.log(document.querySelector("h1"))
// tudo dentro do body é documento
//query selecto busca um html (consulta)
//querySelector ("tag")
//queryselector ("#id")
document.querySelector("h1") .innerHTML+=">>" //<i><i> italico += é elemteno de "string"

//Acesso a um elemento de formulário
console.log(document.forms.formContato)
//Evento de clique no botão confirmar
var formC=document.forms.formContato
//acesso ao formcontato para variavel formC
document.querySelector("#btContato").onclick=function(){
    //alert('Aprende a escrever direito')
    if(formC.nomeContato.value == ""){
        alert("Preencha o nome!")
    }else if (formC.emailContato.value == ""){
        alert("Preencha o e-mail!")
    }else if(formC.comentario.value == ""){
        alert("Preencha o comentário")
    }else{
        formC.submit()
    }
    //alert(formC.nomeContato.value)
    //alert(formC.nomeEmail.value)
    //lert(formC.comentario.value)

}