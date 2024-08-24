let base = Number(prompt('Digite o valor da base: '))
let expoente = Number(prompt('Digite o valor do espoente: '))
let resultado = base

for(i=0 ; i < expoente-1; i++){
    resultado = resultado * base
}
alert(`${base}^${expoente}=${resultado}`)

