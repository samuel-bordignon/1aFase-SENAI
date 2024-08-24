
let anguloUm = parseFloat(prompt('Digite o primeiro ângulo do triângulo: '))
let anguloDois = parseFloat(prompt('Digite o segundo ângulo do triângulo: '))
let anguloTres = parseFloat(prompt('Didgte o terceiro ângulo do triângulo: '))

if(anguloUm === 90 || anguloDois === 90 || anguloTres === 90 ){
    alert('triangulo retângulo')
}else if(anguloUm > 90 || anguloDois > 90 || anguloTres > 90 ){
    alert('triangulo obtusângulo')
}else{
    alert('triangulo acutângulo')
}