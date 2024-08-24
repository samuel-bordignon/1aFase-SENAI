programa {

  /*Elaborar um programa que alerte sobre os riscos de animais em extin��o. O usu�rio deve digitar o nome da esp�cie
   e a sua popula��o (total de indiv�duos). Popula��es entre 200 e 500 indiv�duos, s�o classificadas como "Esp�cie
    criticamente em perigo", popula��es entre 500 e 1000 indiv�duos, s�o classificadas como "Esp�cie em perigo" e 
    popula��es entre 1000 e 5000 indiv�duos, s�o classificadas como "Esp�cie vulner�vel!" */
  funcao inicio() {

    cadeia nomeEspecie
    inteiro numeroPopulacaoEspecie

    escreva("Digite o nome da esp�cie: ")
    leia(nomeEspecie)
    escreva("Digite a popula��o total da esp�cie: ")
    leia(numeroPopulacaoEspecie)

    se(numeroPopulacaoEspecie > 5000){
      escreva("Esp�cie fora de risco. Popula��o de: ", nomeEspecie, " ", numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 1000 e numeroPopulacaoEspecie <= 5000){
      escreva("Esp�cie vulner�vel. Popula��o de: ", nomeEspecie, " ", numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 500 e numeroPopulacaoEspecie < 1000){
      escreva("Esp�cie em perigo. Popula��o de: ", nomeEspecie, " ",numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 200 e numeroPopulacaoEspecie < 500){
      escreva("Esp�cie criticamente em perigo. Popula��o de ", nomeEspecie," ", numeroPopulacaoEspecie)

    }senao{
      escreva("Esp�cie muito pr�xima da extin��o")
    }

    
  }
}
