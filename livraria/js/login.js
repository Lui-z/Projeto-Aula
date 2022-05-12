//atribuindo o acesso ao formcontato para a variavel formC
var formL=document.forms.formLogin
//Evento de clique no botão confirmar
document.querySelector("#btLogin").onclick=function(){
   // alert('ok')
   if(formL.email.value == ""){
       alert("Preencha o email!")
   }else if (formL.senha.value == ""){
   alert("Preencha o senha!")
   }else{ 
    formL.submit()
 }
}