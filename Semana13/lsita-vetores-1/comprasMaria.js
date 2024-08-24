/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/
let carrinho = []
carrinho[0] = "camiseta"
carrinho[1] = "calça"
carrinho[2] = "sapato"
carrinho.shift()
carrinho[0] = "tênis"
console.log(carrinho.join(', '))