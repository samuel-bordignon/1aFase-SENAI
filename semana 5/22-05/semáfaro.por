programa {
  /*Fa�a um programa no qual o usu�rio digite a cor que est� no sem�foro (verde, amarelo, vermelho).
   Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta,
    pare!" e se for digitado vermelho, mostre "Pare imediatamente!". */
  funcao inicio() {
    cadeia resposta

    escreva("Que cor est� o sem�faro? (amarelo, vermelho ou verde): ") 
    leia(resposta)

     se(resposta == "amarelo"){
      escreva("Alerta, pare!")
     }senao se(resposta == "verde"){
      escreva("Pode seguir!")
     }senao se(resposta == "vermelho"){
      escreva("Pare imediatamente!")
     }
    
  }
}
