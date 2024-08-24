/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/
let tarefas = []
for (i = 1; i < 2; i++) {
    tarefas.push(prompt(`Digite a terefa número ${i} : `))
}
tarefas.splice(1, 1, "ligar para o médico")

alert('Tarefas para hoje: ' + tarefas.join(', '))