// Crie um programa que solicite a senha de um usuário e depois,
// peça pra digitar novamente até que as duas senhas sejam correspondentes.
let senhaInicio = prompt('Digite uma senha: ')
let senhaConfirma

while (senhaConfirma != senhaInicio) {
  senhaConfirma = prompt('Confirme sua senha')
  if (senhaConfirma != senhaInicio) {
    alert('Senha digitada errada')
  }
}
alert('Acesso consedido')