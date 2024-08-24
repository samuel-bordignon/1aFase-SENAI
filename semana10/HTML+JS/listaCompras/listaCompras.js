function calculaDesconto(){
    let valorFinalProduroUm = parseInt(document.getElementById("quantidade-produto-um").value) * parseFloat(document.getElementById("valor-produto-um").value)
    let valorFinalProduroDois = parseInt(document.getElementById("quantidade-produto-dois").value) * parseFloat(document.getElementById("valor-produto-dois").value)
    let valorFinalProduroTres = parseInt(document.getElementById("quantidade-produto-tres").value) * parseFloat(document.getElementById("valor-produto-tres").value)
    let valorFinalProduroQuatro = parseInt(document.getElementById("quantidade-produto-quatro").value) * parseFloat(document.getElementById("valor-produto-quatro").value)   
    let somaProdutos = valorFinalProduroUm + valorFinalProduroDois + valorFinalProduroTres + valorFinalProduroQuatro
    let percentualDesconto = parseFloat(document.getElementById("percentual-desconto").value) / 100
    let valorFinal = somaProdutos - (somaProdutos * percentualDesconto)

    document.getElementById("valor-final").value = valorFinal
}