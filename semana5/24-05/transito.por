
programa {
  /*4) Simulador de tr�nsito: Crie um programa que pergunte a idade do usu�rio e, se ele
   tiver idade suficiente para dirigir (por exemplo, 18 anos), exiba "Voc� pode dirigir";
    caso contr�rio, exiba "Voc� ainda n�o pode dirigir". */
  funcao inicio() {
    inteiro idadeUsuario, idadePermitida =18

    escreva("Digite sua idade:")
    leia(idadeUsuario)

    se(idadeUsuario >= idadePermitida){
    	escreva("Voc� pode dirigir")
		
    }senao{
    	escreva("Voc� n�o pode dirigir")
    }
  }
}
