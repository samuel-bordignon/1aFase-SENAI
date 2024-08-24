// 7) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal)
//  e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

let pesoUsuario = Number(prompt('Digite seu peso: '))
let alturaUsuario = Number(prompt('Digite sua altura: '))
let imcUsuario = pesoUsuario / alturaUsuario **2

if(imcUsuario < 18){
    alert('Abaixo do peso.')
}else if(imcUsuario >= 18 && imcUsuario <= 25){
    alert('Na faixa do peso ideal.')
}else{
    alert('acima do peso')
}
    
