programa {
 /* Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usu�rio digite o valor de um dano (ataque sofrido pelo personagem).
  Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano cr�tico, quase sem 
  vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida est�vel" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!". */
  funcao inicio() {
    
    inteiro danoPersonagem, vidaPersonagem =100,  

    escreva("Digite o dano recebido pelo personagem: ")
    leia(danoPersonagem)

    vidaPersonagem = vidaPersonagem - danoPersonagem

    se(vidaPersonagem >= 51 e vidaPersonagem <= 100){
       escreva("Dano leve, vida boa!")
    }senao se(vidaPersonagem >= 21 e vidaPersonagem <= 51){
       escreva("Dano moderado, vida est�vel")
    }senao se(vidaPersonagem >= 1 e vidaPersonagem <= 20){
       escreva("Dano cr�tico, quase sem vida")
    }senao{
       escreva("Game Over")
    }
    escreva("Vida do personagem: ", vidaPersonagem)
  }
}
