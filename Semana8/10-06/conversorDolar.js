// 9) Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na
//  tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let valorDolar = parseFloat(prompt('Digete o valor em Dólar para converter-lo para Reais: '))
let cotacaoDolar = parseFloat(prompt('Digite a cotação do Dólar: '))
let valorReais = valorDolar * cotacaoDolar

if(cotacaoDolar > 5){
    alert('$ ' + valorDolar +' equivalem a R$ ' + valorReais)
    alert('A cotação está cara. ')
}else{
    alert('$ ' + valorDolar +' equivalem a R$ ' + valorReais)
    alert('A cotação está barata. ')
}
