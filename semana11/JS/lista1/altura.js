// Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo
// Pedrinho tem 1,60m de altura e cresce 3cm por ano. Faça um programa que
// calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.
let alturaJoao = 1.75
let alturaPedro = 1.60
let passagemAnos = 0

while(alturaPedro < alturaJoao){
    alturaJoao += 0.01
    alturaPedro += 0.03
    passagemAnos ++
}
alert('Joãozinho será mais alto que pedrinho em ' + passagemAnos + ' anos')