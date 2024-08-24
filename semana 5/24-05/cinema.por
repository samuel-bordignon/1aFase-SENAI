programa {
  /*5) Verificador de idade para desconto
  no cinema: Escreva um programa que
  pergunte a idade do usuário e, se ele 
  tiver menos de 12 anos, conceda um
  desconto de 50% no ingresso do cinema;
  se ele tiver entre 12 e 18 anos, conceda
  um desconto de 25%; caso contrário, não 
  conceda nenhum desconto.. */
  funcao inicio() {    
  	inteiro idadePessoa
  	real descontoUm = 0.5, descontoDois = 0.25,valorIngresso = 100, valorDescontado, valorComDesconto
  
  	escreva("digite sua idade: ")
  	leia(idadePessoa)
  	
  	se(idadePessoa < 12){
  		
  		valorDescontado = valorIngresso * descontoUm
  		valorComDesconto = valorIngresso - valorDescontado
        escreva("Total a pagar: R$", valorComDesconto,"\n")
		escreva("Valor descontado: R$", valorDescontado,"/n")
		escreva("valor do ingresso: R$", valorIngresso,"/n")
  		
  	}senao se(idadePessoa >=12 e idadePessoa <= 18){
  		
  		valorDescontado = valorIngresso * descontoDois
  		valorComDesconto = valorIngresso - valorDescontado
        escreva("Total a pagar: R$", valorComDesconto,"\n")
		escreva("Valor descontado: R$", valorDescontado,"\n")
		escreva("valor do ingresso: R$", valorIngresso,"\n")
  		
    }senao se(idadePessoa > 25){
		
        escreva("Total a pagar: R$", valorIngresso, "\n")
		escreva("Valor descontado: R$ 00.00", "\n")
		escreva("valor do ingresso: R$", valorIngresso, "\n")
	}
  	
  		
  	}
  	
  }
