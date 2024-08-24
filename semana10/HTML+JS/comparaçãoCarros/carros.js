// Criar um sistema de comparação de carros, de acordo com a imagem. Devem ser digitadas notas de 0 a 10 para os 3 critérios (conforto, economia, design) de cada carro, o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, devem ser mostradas a médias de cada carro e o melhor carro (carro com melhor média) nos respectivos campos.
function oo() {
    let confortoCarroUm = parseInt(document.getElementById("conforto-carro-um").value)
    let economiaCarroUm = parseInt(document.getElementById("economia-carro-um").value)
    let desingCarroUm = parseInt(document.getElementById("desing-carro-um").value)
    let somaCarroUm = confortoCarroUm + economiaCarroUm + desingCarroUm
    let mediaCarroUm = Number((somaCarroUm / 3).toFixed(2))

    let confortoCarroDois = parseInt(document.getElementById("conforto-carro-dois").value)
    let economiaCarroDois = parseInt(document.getElementById("economia-carro-dois").value)
    let desingCarroDois = parseInt(document.getElementById("desing-carro-dois").value)
    let somaCarroDois = confortoCarroDois + economiaCarroDois + desingCarroDois
    let mediaCarroDois = Number((somaCarroDois / 3).toFixed(2))

    let confortoCarroTres = parseInt(document.getElementById("conforto-carro-tres").value)
    let economiaCarroTres = parseInt(document.getElementById("economia-carro-tres").value)
    let desingCarroTres = parseInt(document.getElementById("desing-carro-tres").value)
    let somaCarroTres = confortoCarroTres + economiaCarroTres + desingCarroTres
    let mediaCarroTres = Number((somaCarroTres / 3).toFixed(2)) 

    if (mediaCarroUm > mediaCarroDois & mediaCarroUm > mediaCarroTres) {
        maiorMedia = 'Carro 1'
    }else if (mediaCarroDois > mediaCarroUm & mediaCarroDois > mediaCarroTres) {
        maiorMedia = 'Carro 2'
    }else if (mediaCarroTres > mediaCarroDois & mediaCarroTres > mediaCarroUm){
        maiorMedia = 'Carro 3'
    }
    document.getElementById("media-carro-um").value = mediaCarroUm
    document.getElementById("media-carro-dois").value = mediaCarroDois
    document.getElementById("media-carro-tres").value = mediaCarroTres
    document.getElementById("melhor-carro").value = maiorMedia
}






