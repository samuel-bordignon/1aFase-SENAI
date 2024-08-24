programa {
  funcao inicio() {
    /*Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia.
     Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no 
     mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do
      grupo vão querer café diário. Mostrar na tela o total a pagar. */

    inteiro numeroPessoas, diaria, pedidosDeCafe
    real valorDiaria, valorCafe, valorTotal
    escreva("\ndigite o número de pessoas: ")
     leia(numeroPessoas)
    escreva("\ndigite quantos dias vai durar a diária: ")
    leia(diaria)
    escreva("\ndigite quntas pessoas vão querer café: ")
    leia(pedidosDeCafe)

    valorCafe = pedidosDeCafe * 15
    valorCafe = valorCafe * diaria
    valorDiaria = diaria * 280
     valorTotal = valorDiaria + valorCafe
     escreva("valor total: ", valorTotal, " R$")



  }
}
