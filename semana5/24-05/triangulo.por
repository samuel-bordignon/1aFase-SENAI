programa {
  /*1) Elabore um programa que leia tr�s lados de um tri�ngulo e mostre na tela se ele � equil�tero, 
  is�sceles ou escaleno. Quando os tr�s lados forem iguais trata-se de um tri�ngulo equil�tero, dois
   lados iguais � um tri�ngulo is�sceles e os tr�s lados diferentes � um tri�ngulo escaleno. */
  funcao inicio() {
    real ladoTrianguloUm, ladoTrianguloDois, ladoTrianguloTres

    escreva("Digite o comprimento do lado A do tri�ngulo: ")
    leia(ladoTrianguloUm)
    escreva("Digite o comprimento do lado B do tri�ngulo: ")
    leia(ladoTrianguloDois)
    escreva("Digite o comprimento do lado C do tri�ngulo: ")
    leia(ladoTrianguloTres)

    se(ladoTrianguloUm == ladoTrianguloDois e ladoTrianguloUm == ladoTrianguloTres e  ladoTrianguloTres == ladoTrianguloDois){
      escreva("O tri�mgulo cujos lados s�o respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " � um tri�golo equil�tero.")

    }senao se(ladoTrianguloUm == ladoTrianguloDois ou ladoTrianguloUm == ladoTrianguloTres ou  ladoTrianguloTres == ladoTrianguloDois){
      escreva("O tri�mgulo cujos lados s�o respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " � um tri�golo is�celes.")

    }senao se(ladoTrianguloUm != ladoTrianguloDois e ladoTrianguloUm != ladoTrianguloTres e  ladoTrianguloTres != ladoTrianguloDois){
      escreva("O tri�mgulo cujos lados s�o respectivamente: ", ladoTrianguloUm, ", ", ladoTrianguloDois, ", ", ladoTrianguloTres, " � um tri�golo escaleno.")
      
    }
  }

}
