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

        escreva("Digite a op��o desejada", "\n")
        escreva("(1) para m�dia semanal", "\n")
        escreva("(2) para m�dia mensal", "\n")
        leia(opcao)

        escolha(opcao) {
            caso 1:
                para(i=0; i<7; i++) {
                    escreva("Digite as horas estudadas no ", i+1, "� dia da semana: ", "\n")
                    leia(dia[i])
                    total = total + dia[i]
                }
                // Arredonda a m�dia para duas casas decimais
                mediaSemana = total / 7
                arredondar = mat.arredondar(mediaSemana, 2) 
				
				
                escreva("M�dia semanal arredondada: ", arredondar, "\n")
              
            caso 2:
				para(i=0; i<7; i++) {
                    escreva("Digite as horas estudadas no ", i+1, "� dia do m�s: ", "\n")
                    leia(dia[i])
                    total = total + dia[i]
                }
                // Arredonda a m�dia para duas casas decimais
                mediaSemana = total / 30
                arredondar = mat.arredondar(mediaMes, 2)
                escreva("M�dia das horas estudadas no m�s, arredondadas: ")
        }
    }
}