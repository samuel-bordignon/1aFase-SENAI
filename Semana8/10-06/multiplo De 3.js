// 5) Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. Após digitar o número, mostrar uma das
//  seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.


let numeroInteiro = Number(prompt('Digite um número inteiro: '))
let verificaNumero = numeroInteiro % 1

while(verificaNumero != 0){
    if(verificaNumero != 0 ){
        alert('Este número não é um inteiro')
    }
    numeroInteiro = Number(prompt('Digite um número inteiro: '))
    verificaNumero = numeroInteiro % 1
}
    
let multiploTres = numeroInteiro % 3
if(multiploTres == 0){
    alert('O número digitado é múltiplo de 3')
}else{
    alert('O número digitado não é múltiplo de 3')
}