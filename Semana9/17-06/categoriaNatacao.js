// 5) Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.

//   - "Infantil A" de 5 a 7 anos de idade
//   - "Infantil B" de 8 a 10 anos de idade
//   - "Juvenil A" de 11 a 13 anos de idade
//   - "Juvenil B" de 14 a 17 anos de idade
//   - "Senior" com 18 anos de idade ou mais

let idadeUsuario = prompt('Digite sua idade: ')

switch (true) {
    case idadeUsuario >= 5 && idadeUsuario <= 7:
        alert("Categoria: Infantil A")
        break
    case idadeUsuario >= 8 && idadeUsuario <= 10:
        alert("Categoria: Infantil B")
        break
    case idadeUsuario >= 11 && idadeUsuario <= 13:
        alert("Categoria: Juvenil A")
        break
    case idadeUsuario >= 14 && idadeUsuario <= 17:
        alert("Categoria: Juvenil B")
        break
    case idadeUsuario >= 18:
        alert("Categoria: Senior")
        break
    default:
        alert('Muito jovem para natação.')
        break
}