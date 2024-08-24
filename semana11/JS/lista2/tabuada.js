// Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.
let numeroDigitado = parseInt(prompt('Digite um número: '))
let i = 0
let numeroAncora = numeroDigitado
while (i < 10) {
  i ++
  numeroDigitado = numeroDigitado * i
  alert(`${numeroAncora} × ${i} = ${numeroDigitado}`)
  numeroDigitado = numeroAncora
}