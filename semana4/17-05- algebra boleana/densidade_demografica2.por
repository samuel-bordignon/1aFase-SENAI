programa {
  funcao inicio() {
    /*Criar um programa para calcular a densidade demográfica (habitantes por 
    quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) 
    dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta 
    (maior ou igual a 100) e densidade baixa (menor que 100). (DESAFIO: Incluir também densidade média entre 50 e 100).*/

//definindo variaveis
    inteiro quantidadeDeHabitantes
    real areaCidade, densidadeDemografica, densidadeAlta = 100, densidadeBaixa = 50

//entrada de dados
  escreva("digite quantos pessoas habitam na cidade: ")
  leia(quantidadeDeHabitantes)
  escreva("digite qual a área, em quilômetros quadrados, da cidade: ")
  leia(areaCidade)

//calculos
densidadeDemografica = quantidadeDeHabitantes / areaCidade

//condicionais
se(densidadeDemografica >= densidadeAlta){
  //saida de dados
  escreva("densidade demográfica alta.")

}senao se ( densidadeDemografica >= densidadeBaixa e densidadeDemografica < densidadeAlta){
  //saida de dados
  escreva("densidade demográfica baixa.")
  
}senao {
	escreva("densidade demográfica muito baixa")
}

  }
}
