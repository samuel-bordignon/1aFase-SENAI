/*3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
 e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.  */

 let anoNasci = parseInt(prompt('Digite o seu ano de nascimento no formato (YYYY):'))
 let anoAtual = parseInt(prompt('Digite o ano atual no formato (YYYY):'))
 let idadeAno = anoAtual - anoNasci

if(idadeAno === 16){
    alert('Você pode votar.')
}else[
    alert('Você não pode votar.')
]
