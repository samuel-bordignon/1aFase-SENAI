// Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, seja calculado o
// IMC (peso / altura * altura). Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula,
// e no campo resultado o resultado de acordo com a tabela abaixo.
function calculaIMC() {
  let pesoUsuario = parseFloat(document.getElementById("input-peso").value)
  let alturaUsuario = parseFloat(document.getElementById("input-altura").value)
  
  if (isNaN(pesoUsuario) || isNaN(alturaUsuario) || alturaUsuario === 0) {
    alert("Por favor, insira valores válidos para peso e altura.")
    return
  }

  let imcUsuario = pesoUsuario / (alturaUsuario * alturaUsuario)
  imcUsuario = imcUsuario.toFixed(2)

  document.getElementById("imc").value = imcUsuario
  descobreResultado(imcUsuario)
}

function descobreResultado(imcUsuario) {
  imcUsuario = parseFloat(imcUsuario) // Certifique-se de que o valor seja numérico
  
  if (imcUsuario < 15) {
    document.getElementById("resultado").value = "Muito abaixo do peso"
  } else if (imcUsuario >= 15 && imcUsuario < 18) {
    document.getElementById("resultado").value = "Abaixo do peso"
  } else if (imcUsuario >= 18 && imcUsuario < 25) {
    document.getElementById("resultado").value = "Peso adequado"
  } else if (imcUsuario >= 25 && imcUsuario < 28) {
    document.getElementById("resultado").value = "Acima do peso"
  } else if (imcUsuario >= 28) {
    document.getElementById("resultado").value = "Muito acima do peso"
  }
}