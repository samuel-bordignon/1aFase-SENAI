//Desenvolva um programa no qual o 
//usuário deve digitar o nome e a idade de 
//5 pessoas. Ao final mostrar a média de 
//idade delas e a maior idade dentre essas 
//pessoas. (DESAFIO: Mostrar na tela 
//também o nome da pessoa com maior idade)
let listaNomes = []
let listaIdades = []
let maiorIdade
let nomeMaiorIdade
let listaIdadesIguais = []

for (var i = 0; i < 5; i++) {
  listaNomes.push(prompt("Digite o nome da pessoa número " + (i+1)))
  listaIdades.push(parseInt(prompt("Digite a idade da pessoa número " + (i+1))))
}
maiorIdade = listaIdades [0]
nomeMaiorIdade = listaNomes [0]

for (var i = 1; i < 5; i++) {
  if(maiorIdade < listaIdades[i]){
  maiorIdade = listaIdades[i]
  nomeMaiorIdade = listaNomes[i]
  }
}
alert(nomeMaiorIdade + " tem a idade de " + maiorIdade + " anos. Essa é a maior idade")
