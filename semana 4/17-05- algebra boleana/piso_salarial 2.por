programa {
  funcao inicio() {
     /*Faça um programa para ler o salário anual de um funcionário e o piso salarial 
     mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele 
     recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.
     (DESAFIO: Incluir uma mensagem também para caso ganhe exatamente igual ao piso). */

//definindo variaveis
     real salarioAnual, pisoSalarioMensal , salarioMensalFuncionario, mesesNoAno = 12

//entrada de dados
     escreva("digite seu salário anual: ")
     leia(salarioAnual)
     escreva("digite seu piso salarial: ")
     leia(pisoSalarioMensal)

//calculos
     salarioMensalFuncionario = salarioAnual / mesesNoAno

//condicionais
     se(salarioMensalFuncionario >= pisoSalarioMensal){
       //saida de dados
      escreva("você recebe um valor condizente ao seu piso salarial \n")

     }senao se(salarioMensalFuncionario == pisoSalarioMensal){
       //saida de dados

      escreva("você recebe exatamenteo seu piso salarial! \n ")
      }senao{

      escreva("você não recebe um valor condizente ao seu piso salarial\n")
      }
      //saida de dados
    escreva("você recebe por mês: ", salarioMensalFuncionario, "\n")
    escreva("quanto é o seu piso salarial: ", pisoSalarioMensal)


    


  }
}
