programa {
  /*3) Desenvolver um programa no qual o usu�rio digite o n�mero de multas que deseja cadastrar e para cada multa deve
   colocar o valor em reais e os pontos perdidos na carteira de habilita��oo. Ao final, mostrar o somat�rio das multas e 
   dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem "Voc� est� irregular", sen�o, exibir "Voc� est� regular". */
  funcao inicio() {
    real valorMulta, somatoriaMulta = 0
	inteiro numeroPontos, somatoriaPontos = 0, numeroCadsstroMulta, contador = 0, limitePontos = 21
	
	escreva("Digite o n�mero de muitas que deseja cadastrar: ")
	leia(numeroCadsstroMulta)
	
	enquanto(contador < numeroCadsstroMulta){
		
		contador ++
		
		escreva("Digite o valor da �", contador, " multa: ")
		leia(valorMulta)
		somatoriaMulta = somatoriaMulta + valorMulta
		
		escreva("Digite quantos pontos voc� perdeu nessa multa: ")
		leia(numeroPontos)
		somatoriaPontos = somatoriaPontos + numeroPontos
		
	}
	escreva("O valor total de todas as multas s�o: R$ ", somatoriaMulta, "\n")
	
	se(somatoriaPontos >= limitePontos){
		escreva("Voc� est� irregular. Total de pontos perdidos na carteiro: ", somatoriaPontos, "\n")
	
		
	}senao{
		
		escreva("Voc� est� regular. Total de pontos perdidos na carteira: ", somatoriaPontos, "\n")
	}
    
  }
}