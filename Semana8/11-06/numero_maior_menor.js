alert('Digite dois números e o sistema vai descobrir qual é o maior, o menor e se eles sãpo iguais.')
let numeroUm = parseInt(prompt('Digite o primeiro número: '))
let numerodois = parseInt(prompt('Digite o segundo número: '))

let numeroMaior 
let numeroMenor 

if(numerodois > numeroUm){
    numeroMaior = numerodois
    numeroMenor = numeroUm
    alert('O número maior é ' + numeroMaior + ' e o número menor é ' + numeroMenor)
}else if (numerodois === numeroUm){
    alert('O primeiro e o segundo número digitados são iguais.')
}else{
    numeroMaior = numeroUm
    numeroMenor = numerodois
    alert('O número maior é ' + numeroMaior + ' e o número menor é ' + numeroMenor)
}