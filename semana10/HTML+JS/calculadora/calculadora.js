let elmtUm = document.getElementById('valorUm')
let elmtDois = document.getElementById('valorDois')
let resultadoFinal

function SOMA(){
    resultadoFinal = Number(elmtUm.value) + Number(elmtDois.value)
    alert(`Resultado final: ${resultadoFinal}`)
}
function SUB(){
    resultadoFinal = Number(elmtUm.value) - Number(elmtDois.value)
    alert(`Resultado final: ${resultadoFinal}`)
}
function MULT(){
    resultadoFinal = Number(elmtUm.value) * Number(elmtDois.value)
    alert(`Resultado final: ${resultadoFinal}`)
}
function DIV(){
    resultadoFinal = Number(elmtUm.value) / Number(elmtDois.value)
    alert(`Resultado final:${resultadoFinal}`)
}