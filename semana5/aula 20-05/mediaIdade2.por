programa {
  /* Desenvolva um programa no qual o usu�rio deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a m�dia de 
  idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar tamb�m o nome da pessoa com a maior idade). */
  funcao inicio() {

    inteiro idadePessoas [5], total = 0, i, maiorIdade = 0, quantidadePessoas = 5
    real mediaIdade
    cadeia nomePessoas[5], maiorNome

para(i=0; i<5; i++) {

  escreva("Digite a idade da ", i+1, "� pessoa: ")
  leia(idadePessoas[i])
  total = total + idadePessoas[i]
  escreva("digite o nome da ", i+1, "� pessoa: ")
  leia(nomePessoas[i])
 }

mediaIdade = total / quantidadePessoas

para(i=0; i<5; i++){

se(idadePessoas[i] > maiorIdade){
maiorIdade = idadePessoas[i]
maiorNome = nomePessoas[i]
 }
}
  escreva("A idade m�dia das pessoas �: ", mediaIdade, "\n")
  escreva("A pessoa mais velha �: ", maiorNome)
  escreva("A maior idade �: ", maiorIdade)
 }
}
  


