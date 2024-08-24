// 1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de
// 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve
// iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo
// até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se
// mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o
// total acumulado de economia.
let totalFinal = 0
let resposta
let totalMoedasUm = 0
let totalMoedasDois = 0
let totalMoedasTres  = 0
let totalMoedasQuatro = 0
let totalMoedasCinco = 0

do {
    resposta = prompt('Qual tipo de moeda você quer inserir no cofrinho? \n  Moeda de 1 centavo(1)\n  Moeda de 5 centavos(2)\n  Moeda de 10 centavos(3)\n  Moeda de 25 centavos(4)\n  Moeda de 50 centavos(5)\n  Sair do programa(0)')
    switch (resposta) {
        case '1':
            totalMoedasUm = Number(prompt('Quantas moedas você quer inserir? '))
            let valorMoedasUm = totalMoedasUm * 0.01
            totalFinal += valorMoedasUm
            break
        case '2':
            totalMoedasDois = Number(prompt('Quantas moedas você quer inserir? '))
            let valorMoedasDois = totalMoedasDois * 0.05
            totalFinal += valorMoedasDois
            break
        case '3':
            totalMoedasTres = Number(prompt('Quantas moedas você quer inserir? '))
            let valorMoedasTres = totalMoedasTres * 0.1
            totalFinal += valorMoedasTres
            break
        case '4':
            totalMoedasQuatro = Number(prompt('Quantas moedas você quer inserir? '))
            let valorMoedasQuatro = totalMoedasQuatro * 0.25
            totalFinal += valorMoedasQuatro
            break
        case '5':
            totalMoedasCinco = Number(prompt('Quantas moedas você quer inserir? '))
            let valorMoedasCinco = totalMoedasCinco * 0.5
            totalFinal += valorMoedasCinco
            break
        case '0':
            alert('Obrigato por sua presença :)')
            break
        default:
            alert('Opção inválida, digite novamente')
    }
} while (resposta != 0){
 
}

alert(`Total de moedas de 1 centavo inseridas: ${totalMoedasUm}\nTotal de moedas de 5 centavos inseridas: ${totalMoedasDois}\nTotal de moedas de 10 centavos inseridas: ${totalMoedasTres}\nTotal de moedas de 25 centavos inseridas: ${totalMoedasQuatro}\nTotal de moedas de 50 centavo inseridas: ${totalMoedasCinco}\n Total de dinheiro quardado ${totalFinal.toFixed(2)}`)

resposta
resposta
