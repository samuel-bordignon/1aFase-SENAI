programa {
  funcao inicio() {
    /*Criar um programa para calcular a densidade demogr�fica (habitantes por 
    quil�metro quadrado) de uma regi�o. Sendo, densidade igual a popula��o (total de habitantes) 
    dividida pela �rea (quil�metros quadrados). Mostrar mensagens para densidade alta 
    (maior ou igual a 100) e densidade baixa (menor que 100). (DESAFIO: Incluir tamb�m densidade m�dia entre 50 e 100).*/

//definindo variaveis
    inteiro quantidadeDeHabitantes
    real areaCidade, densidadeDemografica, densidadeAlta = 100, densidadeBaixa = 50

//entrada de dados
  escreva("digite quantos pessoas habitam na cidade: ")
  leia(quantidadeDeHabitantes)
  escreva("digite qual a �rea, em quil�metros quadrados, da cidade: ")
  leia(areaCidade)

//calculos
densidadeDemografica = quantidadeDeHabitantes / areaCidade

//condicionais
se(densidadeDemografica >= densidadeAlta){
  //saida de dados
  escreva("densidade demogr�fica alta.")

}senao se ( densidadeDemografica >= densidadeBaixa e densidadeDemografica < densidadeAlta){
  //saida de dados
  escreva("densidade demogr�fica baixa.")
  
}senao {
	escreva("densidade demogr�fica muito baixa")
}

  }
}
