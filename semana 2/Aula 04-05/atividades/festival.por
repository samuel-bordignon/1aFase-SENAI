programa {
  funcao inicio() {
    /* Um festival de m�sica est� terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de p�blico para calcular a quantidade de bares
     e banheiros. O c�lculo utilizado � de 1 banheiro para cada 50pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o p�blico esperado e mostrar
      na tela em m�dia quantos banheiros e bares seriam necess�rios. */

    inteiro pessoas, banheiros, bares    
    escreva("digite a quantidade de pessoas no festival: ")
    leia(pessoas)

    banheiros = pessoas / 50
    bares = pessoas / 150

    escreva( "no festival precisar� construir ", banheiros, " banheiros e ", bares, " bares")
  }
}
