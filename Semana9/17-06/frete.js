// 3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de
// R$12,50. A loja possui benefícios para assinantes em três categorias: 1)
// Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold,
// ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de 
// desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa
// que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
// Mostrar na tela o valor da compra de acordo com a opção escolhida.

let valorFrete = 12.5
let resposta = prompt('Bem vindo ao mercadinho! \n por favor digite seu nível de assinatura: \n(1) Para ssinante Premium \n(2) Assinante Gold \n(3) Assinante Silver \n(4) Não assinante')
let valorCompra = prompt('Digite o valor de sua compra: ')
const descontoPremium = 20/100
const descontoGold = 20/100
const descontoSilver = 10/100
let valorFinal 
let valorComDesconto

switch (resposta) {
    case '1':
        valorComDesconto * descontoPremium
        valorFinal = valorCompra - valorComDesconto
        break
    case '2':
        valorComDesconto * descontoGold
        valorFinal = valorCompra - valorComDesconto + valorFrete
        break
    case '3':
        valorComDesconto * descontoSilver
        valorFinal = valorCompra - valorComDesconto + valorFrete
        break
    case '4':
        valorCompra + valorFrete
        break
    default:
        alert('Opção selecionada inválida!')
}
alert('Valor final de compra: R$ ' + valorCompra)
