// 1) Crie um programa onde o usuário digite um número e informe se é positivo ou negativo.

let numeroDigitado = Number(prompt('Digite um núnero desejado e o sistema vai descoobrir se ele é negativo ou positivo: '))

if(numeroDigitado > 0){
    alert('O número fornecido é um número positivo')
}else if(numeroDigitado == 0){
    alert('O número digitado é um número neutro, seu número é zero')
}else{
    alert('O número fornecido é um número negativo')
}