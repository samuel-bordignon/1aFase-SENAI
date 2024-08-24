// 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

// A) Falar com a atendente    B) Falar com o RH
// C) Falar com o gerente       D) Sair

let resposta = prompt('Digite: \n(A) para falar com a atendente \n(B) para falar com o RH \n(C) para falar com o gerente \n(D) sair').toUpperCase()

switch (resposta) {

    case 'A':
        alert('Você está falando com a atendente.')
        break
    case 'B':
        alert('Você está falando com o RHe.')
        break
    case 'C':
        alert('Você está falando com o gerente.')
        break
        case 'D':
        alert('Você saiu.')
        break
    default:
        alert('Opção inválida')
}



