programa {
	inclua biblioteca Matematica --> mat
    funcao inicio() {
        real dia[7]
		real total
		real mediaSemana
		real arredondar
		real mediaMes
        inteiro i
		inteiro opcao
        total = 0

        escreva("Digite a opção desejada", "\n")
        escreva("(1) para média semanal", "\n")
        escreva("(2) para média mensal", "\n")
        leia(opcao)

        escolha(opcao) {
            caso 1:
                para(i=0; i<7; i++) {
                    escreva("Digite as horas estudadas no ", i+1, "° dia da semana: ", "\n")
                    leia(dia[i])
                    total = total + dia[i]
                }
                // Arredonda a média para duas casas decimais
                mediaSemana = total / 7
                arredondar = mat.arredondar(mediaSemana, 2) 
				
				
                escreva("Média semanal arredondada: ", arredondar, "\n")
              
            caso 2:
				para(i=0; i<7; i++) {
                    escreva("Digite as horas estudadas no ", i+1, "° dia do mês: ", "\n")
                    leia(dia[i])
                    total = total + dia[i]
                }
                // Arredonda a média para duas casas decimais
                mediaSemana = total / 30
                arredondar = mat.arredondar(mediaMes, 2)
                escreva("Média das horas estudadas no mês, arredondadas: ")
        }
    }
}