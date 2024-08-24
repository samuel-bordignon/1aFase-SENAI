programa {
	inclua biblioteca Matematica --> mat
    funcao inicio() {
    real quantidadeDeHoras[4], total, mediaSemana, arredondar
    inteiro i, opcao, quantidadeDeSemanas = 4
    total = 0
                para(i=0; i<4; i++) {

                    escreva("Digite as horas estudadas na ", i+1, "° semana: ")
                    leia(quantidadeDeHoras[i])
                    total = total + quantidadeDeHoras[i]
                }
                // cálculos
                mediaSemana = total / 4
                arredondar = mat.arredondar(mediaSemana, 2) 
				
                escreva("Média mensal arredondada: ", arredondar, "\n")
        
    }
}