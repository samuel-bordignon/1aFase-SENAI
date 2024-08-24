// 2) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês
//  e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let diaMes = prompt('Digite quantos dias tem o mês escolido')

switch(diaMes){
    case 31:
    case 28:
        alert('Meses possíveis: janeiro, março, maio, julho, agosto, outubro e dezembro')
        break
    case 30:
        alert('Meses possíveis: abril, junho, setembro e novembro')
        break
    default:
        alert('Opção inválida')
}