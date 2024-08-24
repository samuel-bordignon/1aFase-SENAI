
function aplicarDano() {
    let vidaAtual = parseInt(document.getElementById("vida-torre").value)
    let elmtDano = parseInt(document.getElementById("inptUm").value)
    let novaVida = vidaAtual - elmtDano

    // Verifica se a nova vida não é menor que 0
    if (novaVida <= 0) {
        novaVida = 0
        let statusAtual = document.getElementById("vida-torre").value
        statusAtual = 'INATIVA'
        document.getElementById("status-torre").value = statusAtual 
    }

    document.getElementById("vida-torre").value = novaVida
}

function aplicarCura() {
    let vidaAtual = parseInt(document.getElementById("vida-torre").value)
    let elmtCura = parseInt(document.getElementById("inptDois").value)
    let novaVida = vidaAtual + elmtCura
    let statusAtual = document.getElementById("vida-torre").value
    statusAtual = 'ATIVA'
    document.getElementById("status-torre").value = statusAtual

    // Verifica se a nova vida não ultrapassa o máximo de 100
    if (novaVida > 100) {
        novaVida = 100
        
    }

    document.getElementById("vida-torre").value = novaVida
}