// 4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let anoServiço = Number(prompt('Digite os anos de serviço nesta empresa: '))
let salarioUsuario = Number(prompt('Digite o seu salário: '))
let bonusSalario  = salarioUsuario * (5/100)


if(anoServiço >= 5){
    salarioUsuario = bonusSalario + salarioUsuario
    alert('Você ganhou um bônus de 5% no seu salário por ter trabalhado por mais de 5 anos nesta empresa.')
    alert('salário de: R$ ' + salarioUsuario)
}else{
    alert('Mais alguns anos e talvez voê ganhe um aumento de 5%')
    alert('salário de: R$ ' + salarioUsuario)
}