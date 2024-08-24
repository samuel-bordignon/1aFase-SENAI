// Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada
//  (primeiro os elementos de um, depois os de outro) e gere um terceiro vetor de
// 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados
// dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores 
// originais e o terceiro vetor com os valores intercalados.

let ListUm = ['livro','livro','livro']
let ListDois = ['filme','filme','filme']
let LisTres = []

for (let i = 0; i < ListUm.length; i++) {
    LisTres.push(ListUm[i])
    LisTres.push(ListDois[i])
}

console.table(ListUm)
console.table(ListDois)
console.table(LisTres)
