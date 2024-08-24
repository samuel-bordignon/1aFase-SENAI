/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []
for (i = 1; i < 4; i++) {
    listaCompras.push(prompt(`Digite o intem número ${i} : `).toUpperCase())
}
if (listaCompras[listaCompras.length - 1] != 'LEITE') {
    listaCompras.push('leite')

}
alert(listaCompras.join(', '))