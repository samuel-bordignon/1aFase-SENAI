// 6) Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para
// digitar o número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado.
// Lista de locais (lua e planetas) e gravidades relativas à Terra:

// 1 - 0,06 Plutão
// 2 - 0,17 Lua
// 3 - 0,38 Mercúrio
// 4 - 0,38 Marte
// 5 - 0,91 Vênus
// 6 - 0,92 Urano
// 7 - 1,06 Saturno
// 8 - 1,19 Netuno
// 9 - 2,34 Júpiter

let pesoObjeto = parseFloat(prompt('Digite o peso do objeto em quilogramas: '))
let resposta = Number(prompt('Selecione um dos lugares do sistema solar digitando:\n(1) para Plutão \n(2) para Lua \n(3) para Mercúrio \n(4) para Marte \n(5) para Vênus \n(6) para Júpiter \n(7) para Saturno \n(8) para Urano \n(9) para Netuno'))

let gravidadePlutao = pesoObjeto * 0.06
let gravidadeLua = pesoObjeto * 0.17
let gravidadeMercurio = pesoObjeto * 0.38
let gravidadeMarte = pesoObjeto * 0.38
let gravidadeVenus = pesoObjeto * 0.91
let gravidadeJupter = pesoObjeto * 2.34
let gravidadeSaturno = pesoObjeto * 1.06
let gravidadeUrano = pesoObjeto * 0.92
let gravidadeNetuno = pesoObjeto * 1.19
switch(resposta) {
    case 1:
        alert(`O peso do objeto informado pesa ${gravidadePlutao} Kg em Plutão. `)
        break
    case 2:
        alert(`O peso do objeto informado pesa ${gravidadeLua} Kg na Lua. `)
        break
    case 3:
        alert(`O peso do objeto informado pesa ${gravidadeMercurio} Kg em Mercúrio. `)
        break
    case 4:
        alert(`O peso do objeto informado pesa ${gravidadeMarte} Kg em Marte. `)
        break
    case 5:
        alert(`O peso do objeto informado pesa ${gravidadeVenus} Kg em Vênus. `)
        break
    case 6:
        alert(`O peso do objeto informado pesa ${gravidadeJupter} Kg em Júpter. `)
        break
    case 7:
        alert(`O peso do objeto informado pesa ${gravidadeSaturno} Kg em Saturno. `)
        break
    case 8:
        alert(`O peso do objeto informado pesa ${gravidadeUrano} Kg em Urano. `)
        break
    case 9:
        alert(`O peso do objeto informado pesa ${gravidadeNetuno} Kg em Netuno. `)
        break
    default:
        alert('Resposta inválida!')
}