programa {
  /*1) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, 
  isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois
   lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno. */
  funcao inicio() {
    real ladoTrianguloUm, ladoTrianguloDois, ladoTrianguloTres

    escreva("Digite o comprimento do lado A do triângulo: ")
    leia(ladoTrianguloUm)
    escreva("Digite o comprimento do lado B do triângulo: ")
    leia(ladoTrianguloDois)
    escreva("Digite o comprimento do lado C do triângulo: ")
    leia(ladoTrianguloTres)

    se(ladoTrianguloUm == ladoTrianguloDois e ladoTrianguloUm == ladoTrianguloTres e  ladoTrianguloTres == ladoTrianguloDois){
      escreva("O triâmgulo cujos lados são respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " é um triâgolo equilátero.")

    }senao se(ladoTrianguloUm == ladoTrianguloDois ou ladoTrianguloUm == ladoTrianguloTres ou  ladoTrianguloTres == ladoTrianguloDois){
      escreva("O triâmgulo cujos lados são respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " é um triâgolo isóceles.")

    }senao se(ladoTrianguloUm != ladoTrianguloDois e ladoTrianguloUm != ladoTrianguloTres e  ladoTrianguloTres != ladoTrianguloDois){
      escreva("O triâmgulo cujos lados são respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " é um triâgolo escaleno.")
      
    }
  }

}
