programa {
  funcao inicio() {
     /*Fa�a um programa para ler o sal�rio anual de um funcion�rio e o piso salarial 
     mensal da sua categoria. Mostrar o sal�rio mensal do funcion�rio e dizer se ele 
     recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.
     (DESAFIO: Incluir uma mensagem tamb�m para caso ganhe exatamente igual ao piso). */

//definindo variaveis
     real salarioAnual, pisoSalarioMensal , salarioMensalFuncionario, mesesNoAno = 12

//entrada de dados
     escreva("digite seu sal�rio anual: ")
     leia(salarioAnual)
     escreva("digite seu piso salarial: ")
     leia(pisoSalarioMensal)

//calculos
     salarioMensalFuncionario = salarioAnual / mesesNoAno

//condicionais
     se(salarioMensalFuncionario >= pisoSalarioMensal){
       //saida de dados
      escreva("voc� recebe um valor condizente ao seu piso salarial \n")

     }senao se(salarioMensalFuncionario == pisoSalarioMensal){
       //saida de dados

      escreva("voc� recebe exatamenteo seu piso salarial! \n ")
      }senao{

      escreva("voc� n�o recebe um valor condizente ao seu piso salarial\n")
      }
      //saida de dados
    escreva("voc� recebe por m�s: ", salarioMensalFuncionario, "\n")
    escreva("quanto � o seu piso salarial: ", pisoSalarioMensal)


    


  }
}
