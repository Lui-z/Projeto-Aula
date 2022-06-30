
console.log('Teste Literals...')
// Modelo 1 *antigo*
let nome="Richard"
let mensagem = "Olá, eu sou " + nome
console.log(mensagem)

// Modelo 2 *novo*
let mensagem2=`Olá ${nome}!`
console.log(mensagem)

// Modelo com calculo
let a = 10
let b = 15
let calculo=`o valor total é ${2 * (a+b)}`
console.log(calculo)

// Modelo 3
function info (){
    return 'Hoje é segunda feira'
}
let infoSemana=`Salve! ${info()}. Bora codar!`
console.log(infoSemana)

// Modelo 4
// date - getDay() [0 - 6] 0 = Domingo 6 = Sabado
//getMonth() [0 - 11] = 0= janeiro 11 = Dezembro
//getDate() - Dia de Hoje
//getHours() g...


let tempo=new Date()
let diaDaSemana=['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
let mesDoAno=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
function infoParam (dia){
    return `Hoje é ${dia}`
}
let infoSemanaParam = 
`Salve! ${infoParam('terça-feira')}`
console.log(infoSemanaParam)
console.log(diaDaSemana[tempo.getDay()])

//Formato data Ex1
let saudacao=
`${diaDaSemana[tempo.getDay()]}, ${tempo.getDate()} de 
${mesDoAno[tempo.getMonth()]} de ${tempo.getFullYear()}`
// Recebe a frase com a ata
document.querySelector("#p1").innerHTML=saudacao


//Formato data Ex2
function relogio (){
    let tempo_1=new Date()
    let hora=tempo_1.getHours()
    let minutos=tempo_1.getMinutes()
    let segundos=tempo_1.getSeconds()
    // Add zero antes do digito se menor que 10
    hora <10 ? hora=`0${hora}`:null
    minutos <10 ? minutos=`0${minutos}`:null
    segundos <10 ? segundos=`0${segundos}`:null
    //console.log(hora, minutos, segundos)
    document.querySelector("#p2").innerHTML=`${hora}:${minutos}:${segundos}`
}
relogio()
let tempo_intervalo=setInterval(
    function(){
        relogio()
    },1000
)

// Modelo 5
let $pessoa={
    nome:"Tom Hanks"

}    
let $msgPessoa=`${$pessoa.nome.toUpperCase()}, ator de cinema`
console.log($msgPessoa)


////////////////////////////////////////////////////////

// ARROW FUNCTIONS

let treinamento = function(){
    return "JavaScript Back End!"
}

let treinamento_1 = () => {
    return "Node Js!"
}
console.log(treinamento())
let calculo_1 = (a,b) => a/b * 100
console.log(calculo_1(10,5))

// SOBRE O THIS - function tradicional repasse automático
let viagem_0= function(){    ///TRADICIONAL///
    document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi diparado por: ${this}<br />` 
}


//// SOBRE O THIS //// (Quando o arrow function NÃO RECONHECE O ELEMENTO DO CLIQUE DE IMEDIATO)

let viagem = (el) => {
document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi diparado por: ${el}<br />`
}

window.addEventListener("load",viagem(this))
document.querySelector("#bt_teste").addEventListener("click",viagem_0)
document.querySelector("#bt_teste").onclick= function(){ viagem(this.id) }