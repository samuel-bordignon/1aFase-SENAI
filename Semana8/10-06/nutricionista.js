// 14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten)
//  e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome
//   e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose 
//   (segunda pergunta). Validar as respostas de SIM e 'NÃO' para letras maiúsculas e minúsculas.
//    Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele 
//    contém glúten ou 'não' e se ele contém lactose ou 'não'. Ao final, informar se o paciente 
//    pode comer os 3 alimentos digitados "Dieta adequada!" ou 'não' pode "Dieta inadequada, 
//    contém alimentos aos quais o paciente é intolerante!".

let alimentoUmNome = prompt('Digite o nome do primeiro alimento')
let alimentoDoisnome = prompt('Digite o nome do segundo alimento')
let alimentoDoisNome = prompt('Digite o nome do terceiro alimento')
let alimento_um_lactose = prompt('O primeiro alimento possui lactose?')
let alimento_um_gluten = prompt('O primeiro alimento possui glúten?')
let alimento_dosi_gluten = prompt('O segundo alimento possui glúten?')
let alimento_dois_lactose = prompt('O segundo alimento possui lactose?')
let alimento_tres_gluten = prompt('O terceiro alimento possui glúten?')
let alimento_tres_lactose = prompt('O terceiro alimento possui lactose?')

let nomePaciente = prompt(' Digite seu nome: ')
let intoleranciaLactose = prompt('voce tem intolerância a lactose?')
let intoleranciaGluten = prompt('voce tem intolerância a glúten')


let respostaAdmLactoseUm = alimento_um_lactose.toUpperCase()
let respostaAdmGlutenUm = alimento_um_lactose.toUpperCase()
let respostaAdmLactoseDois = alimento_dois_lactose.toUpperCase()
let respostaAdmGlutenDois = alimento_dois_lactose.toUpperCase()
let respostaAdmLactoseTres = alimento_tres_lactose.toUpperCase()
let respostaAdmGlutenTres = alimento_tres_lactose.toUpperCase()

let respostaUsuarioLactose = intoleranciaLactose.toUpperCase()
let respostaUsuarioGluten = intoleranciaGluten.toUpperCase()

/////////////////////////////////////////////////////////////////

if (respostaGluten == 'NÃO' && respostaLactose == 'NÃO') {
    intoleranciaGluten = false
    intoleranciaLactose = false

} else if (respostaGluten == 'NÃO' && respostaLactose == 'SIM') {
    intoleranciaGluten = false
    intoleranciaLactose = true

} else if (respostaGluten == 'SIM' && respostaLactose == 'NÃO') {
    intoleranciaGluten = true
    intoleranciaLactose = false

} else if (respostaGluten == 'SIM' && respostaLactose == 'SIM') {
    intoleranciaGluten = true
    intoleranciaLactose = true

}

//////////////////////////////////////////////////////////////////////

if (respostaAdmLactoseUm == 'NÃO' && respostaAdmGlutenUm == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseDois == 'NÃO' && respostaAdmGlutenDois == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseTres == 'NÃO' && respostaAdmGlutenTres == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

}

//////////////////////////////////////////////////////////////////////

if (respostaAdmLactoseUm == 'NÃO' && respostaAdmGlutenUm == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseDois == 'NÃO' && respostaAdmGlutenDois == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseTres == 'NÃO' && respostaAdmGlutenTres == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

}

//////////////////////////////////////////////////////////////////////

if (respostaAdmLactoseUm == 'SIM' && respostaAdmGlutenUm == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseDois == 'SIM' && respostaAdmGlutenDois == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseTres == 'SIM' && respostaAdmGlutenTres == 'NÃO') {
    alimento_um_lactose = false
    alimento_um_gluten = false

}

//////////////////////////////////////////////////////////////////////

if (respostaAdmLactoseUm == 'SIM' && respostaAdmGlutenUm == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseDois == 'SIM' && respostaAdmGlutenDois == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

} else if (respostaAdmLactoseTres == 'SIM' && respostaAdmGlutenTres == 'SIM') {
    alimento_um_lactose = false
    alimento_um_gluten = false

}

//////////////////////////////////////////////////////////////////////

if (intoleranciaGluten == alimento_um_gluten && intoleranciaLactose == alimento_um_lactose || intoleranciaGluten == alimento_dois_gluten && intoleranciaLactose == alimento_dois_lactose || intoleranciaGluten == alimento_tres_gluten && intoleranciaLactose == alimento_tres_lactose) {
    alert("Dieta inadequada, contém alimentos aos quais o paciente é intolerante!")
} else if (intoleranciaGluten == true && intoleranciaLactose == true) {
    alert("Dieta adequadan")

}
