/*Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses,
25 estão ocupados pelas próximas semanas.

Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos).

Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a
mais de hóspedes que ficariam sem leito.
 
(DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).*/

let capacidadeTotal = 130;
let capacidadeAtual = capacidadeTotal * 0.5; // Capacidade atual é 50% da capacidade total
let leitosOcupados = 25; // Leitos já ocupados pelas próximas semanas
let leitosDisponiveis = capacidadeAtual - leitosOcupados;//40
let pessoasSaindo

let pessoasEntrando = Math.abs(parseInt(prompt('Digite quantas pessoas vão entrar no hotel: ')))

console.log(entradaPessoas(pessoasEntrando))

    if (pessoasEntrando <= leitosDisponiveis) {
        leitosDisponiveis -= pessoasEntrando
        leitosOcupados += pessoasEntrando
        return leitosOcupados
    } else {
        alert('capacidade exedida!')
    }
    if(leitosOcupados > 40){
        let pessoasEntrando = -Math.abs(parseInt(prompt('Digite quantas pessoas vão sair do hotel: ')))
        if()
    }

 