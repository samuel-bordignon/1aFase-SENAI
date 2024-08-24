programa {
  funcao inicio() {
    /*Criar um programa para calcular a densidade demográfica (habitantes por 
    quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) 
    dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta 
    (maior ou igual a 100) e densidade baixa (menor que 100).*/

//definindo variaveis
    inteiro quantidadeDeHabitantes
    real areaCidade, densidadeDemografica

//entrada de dados
  escreva("digite quantos pessoas habitam na cidade: ")
  leia(quantidadeDeHabitantes)
  escreva("digite qual é a área, em quilômetros quadrados, da cidade: ")
  leia(areaCidade)

//calculos
densidadeDemografica = quantidadeDeHabitantes / areaCidade

//condicionais
se(densidadeDemografica >= 100){
  //saida de dados
  escreva("densidade demográfica alta.")

}senao{
  //saida de dados
  escreva("densidade demográfica baixa.")
}

  }
}
