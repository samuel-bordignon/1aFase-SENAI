programa {
  /*Elabore um programa que leia a idade e o tempo de servi�o de um trabalhador e escreva se ele pode ou nao se aposentar. As condi��es para aposentadoria s�o:

a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos */
  funcao inicio() {
    inteiro idadeTrabalhador
    real temposervico

    escreva("Digite sua idade: ")
    leia(idadeTrabalhador)
    escreva("Digite seu tempo de servi�o na empresa (em anos): ")
    leia(temposervico)

    se(idadeTrabalhador >= 65){
      escreva("Pode se aposentar ")

    }senao se(idadeTrabalhador >= 30){
      escreva("Pode se aposentar ")

    }senao se(idadeTrabalhador >= 60 e temposervico){
      escreva("Pode se aposentar ")
      
    }senao{
      escreva("N�o pode se aposentar")
    }
  }
}
