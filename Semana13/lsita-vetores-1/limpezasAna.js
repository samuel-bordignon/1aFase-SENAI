/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/
let tarefasLimpeza = []
for (i = 1; i < 5; i++) {
    tarefasLimpeza.push(prompt('DIgite a tarefa número ' + i + ' :'))
}
tarefasLimpeza[1] = "limpar banheiro"

alert(`Tarefas para hoje: ${tarefasLimpeza.join(', ')}`)