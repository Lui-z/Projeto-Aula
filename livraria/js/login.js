//Evento de clique no botão confirmar
var formL=document.forms.formlogin
//acesso ao formcontato para variavel formC
document.querySelector("#btlogin").onclick=function(){
    //alert('Aprende a escrever direito')
    if(formL.email.value == ""){
        alert("Preencha o email!")
    }else if (formL.senha.value == ""){
        alert("Preencha a senha!")
    }else{
        formL.submit()
    }
}