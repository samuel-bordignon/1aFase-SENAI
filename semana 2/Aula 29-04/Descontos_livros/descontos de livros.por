programa {
  funcao inicio() {
//Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.

    real livroUm, livroDois, livroTres, resultado, somaLivros, desconto

    escreva("digite o valor do 1° livro: ")
    leia(livroUm)
    escreva("digite o valor do 2° livro: ")
    leia(livroDois)
escreva("digite o valor do 3° livro: ")
    leia(livroTres)

    somaLivros = livroUm + livroDois + livroTres
    resultado = somaLivros * 0.85
    desconto = somaLivros * 0.15
    escreva(" valor com desconto: ", resultado, "\n")
    escreva("valor descontado: ", desconto, "\n")




  
  }
}
