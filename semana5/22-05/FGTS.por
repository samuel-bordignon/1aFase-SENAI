programa 
{
	/*Criar um programa no qual o usu�rio digite o motivo 
	da sua sa�da em uma empresa e o valor do seus FGTS. 
	Para motivo "Justa causa" o valor a receber � o valor 
	do FGTS somado a uma multa de R$4.000,00. Para motivo
	"Sem justa causa" o valor a receber � o valor do FGTS
	com desconto de 15%. Ao final mostrar o valor a receber.*/
	funcao inicio()
	{
	real valorFGTS, multa  = 4000,  desconto = 0.15, valorFinal
	cadeia justaCausa
	logico resposta = falso
	
	escreva("Bem vindo ao portal de atendimento ao RH (Recursos Humanos)\n")
	escreva("Digite o valor do seu FGTS:")
	leia(valorFGTS)
	faca{
	escreva("Digite (Justa causa) se sua sa�da foi por justa causa ou digite (Sem justa causa) se sua sa�da foi sem justa causa: ")
	leia(justaCausa)
	
	se(justaCausa == "Justa causa"){
		valorFinal = valorFGTS + multa
		escreva("Total a receber: R$", valorFinal)
		
	}senao se(justaCausa == "Sem justa causa"){
		valorFinal = valorFGTS - (valorFGTS * desconto)
		escreva("Total a receber: R$", valorFinal)
		
	}senao{
		escreva("Resposta inv�lida!")
		resposta = verdadeiro
	}
	
	}enquanto(resposta == verdadeiro)
}
}