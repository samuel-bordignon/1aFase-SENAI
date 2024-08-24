
programa {
  /*4) Simulador de trânsito: Crie um programa que pergunte a idade do usuário e, se ele
   tiver idade suficiente para dirigir (por exemplo, 18 anos), exiba "Você pode dirigir";
    caso contrário, exiba "Você ainda não pode dirigir". */
  funcao inicio() {
    inteiro idadeUsuario, idadePermitida =18

    escreva("Digite sua idade:")
    leia(idadeUsuario)

    se(idadeUsuario >= idadePermitida){
    	escreva("Você pode dirigir")
		
    }senao{
    	escreva("Você não pode dirigir")
    }
  }
}
