// Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da 
// pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que 
// isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para 
// armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu 
// desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.
let totalPontos = 0
let percentual

for (var i = 1; i <= 6; i++) {
  let pontoArremeco = parseInt(prompt('Digite os pontos do arremeço número ' + i))
  totalPontos += pontoArremeco
}
percentual = totalPontos * 100
percentual = percentual / 60
if (percentual >= 75) {
  alert('Vocé passou para a próxima fase! \nTotal de pontos: ' + totalPontos + '\nSeu desempenho: ' + percentual + '٪')
} else if (percentual < 75 && percentual >=50) {
  alert('Vocé foi para a repescagem! \nTotal de pontos: ' + totalPontos + '\nSeu desempenho: ' + percentual + '٪')
}else if (percentual < 50){
  alert('Você foi eliminado! \nTotal de pontos: ' + totalPontos + '\nSeu desempenho: ' + percentual + '٪')
}else{
  alert('Parece que houve um erro em um dos campos preenchidos. Por favor, verifique e tente novamente.')
}