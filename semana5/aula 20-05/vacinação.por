programa {
  /*Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem 
  "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contr�rio, mostrar mensagem 
  "N�o pode se vacinar!".  */
  funcao inicio() {
  	
  	
    cadeia respostaComorbidade, nomePessoa
    inteiro numeroidade, idadeLimite = 60


	faca{
  escreva("Digite seu nome:")
    leia(nomePessoa)

	escreva("Digite sua idade: ")
    leia(numeroidade)
	
	se(numeroidade < 1){
		escreva("Resposta inv�lida!\n")
	}
		}enquanto(numeroidade < 1)
		
	faca{
    escreva("Responda se voc� tem comorbidades \nDigite (N) para n�o e (S) para sim: ")
    leia(respostaComorbidade)
	
	se(respostaComorbidade != "N" e respostaComorbidade != "S" e respostaComorbidade != "s" e respostaComorbidade != "n"){
		escreva("Resposta inv�lida!\n")
	}
		}enquanto(respostaComorbidade != "N" e respostaComorbidade != "S" e respostaComorbidade != "s" e respostaComorbidade != "n")
	
	
	se(numeroidade >= idadeLimite ou respostaComorbidade == "S" ou respostaComorbidade == "s"){
		
		escreva(nomePessoa, "Pode se vacinar!")
		
	}senao{
		escreva(nomePessoa, "N�o pode se vacinar!")
	}


    
  }
}
