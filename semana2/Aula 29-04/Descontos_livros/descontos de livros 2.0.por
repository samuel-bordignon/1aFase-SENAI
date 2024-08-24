programa {
  funcao inicio() {
/*Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. 
Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto. */

    //definindo variáveis

    real livroUm, livroDois, livroTres, somaLivros, valorComDesconto, valorDescontado

    //entrada de dados
    escreva("digite o valor do 1° livro: ")
    leia(livroUm)
    escreva("digite o valor do 2° livro: ")
    leia(livroDois)
    escreva("digite o valor do 3° livro: ")
    leia(livroTres)

    //calculos
    somaLivros = livroUm + livroDois + livroTres
    valorComDesconto = somaLivros * 85/100
    valorDescontado = somaLivros - valorComDesconto

    //saída de dados
    escreva("\nvalor total: ", somaLivros)
    escreva("\nvalor com desconto: ", valorComDesconto)
    escreva("\nvalor descontado: ", valorDescontado)
   


  
  }
}
