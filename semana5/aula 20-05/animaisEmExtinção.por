programa {

  /*Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie
   e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie
    criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e 
    populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!" */
  funcao inicio() {

    cadeia nomeEspecie
    inteiro numeroPopulacaoEspecie

    escreva("Digite o nome da espécie: ")
    leia(nomeEspecie)
    escreva("Digite a população total da espécie: ")
    leia(numeroPopulacaoEspecie)

    se(numeroPopulacaoEspecie > 5000){
      escreva("Espécie fora de risco. População de: ", nomeEspecie, " ", numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 1000 e numeroPopulacaoEspecie <= 5000){
      escreva("Espécie vulnerável. População de: ", nomeEspecie, " ", numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 500 e numeroPopulacaoEspecie < 1000){
      escreva("Espécie em perigo. População de: ", nomeEspecie, " ",numeroPopulacaoEspecie)

    }senao se(numeroPopulacaoEspecie >= 200 e numeroPopulacaoEspecie < 500){
      escreva("Espécie criticamente em perigo. População de ", nomeEspecie," ", numeroPopulacaoEspecie)

    }senao{
      escreva("Espécie muito próxima da extinção")
    }

    
  }
}
