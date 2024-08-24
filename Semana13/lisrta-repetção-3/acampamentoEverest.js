// O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem
// rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base,
// faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de
// 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem
// oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

let contador = 0
let totalMetros = 0
let metrosDia
let metaMetros = 3448

do {
    contador ++
    totalMetros += metrosDia = parseFloat(prompt('Digite a quantidade de metros escalados no dia ' + contador + ': '))
    
    if(totalMetros >= metaMetros){
        alert(`Você chegou ao topo em ${contador} dias`)
        break

    }else if(totalMetros < metaMetros && contador == 8){
        alert('Você deve voltar, pois corre risco de ficar sem oxigênio' + contador)
    }

    console.log(totalMetros)

} while (contador < 8)

