programa {
  /* Fa�a um programa do qual o usu�rio digite quatro n�meros e ao final mostre o maior n�mero, o menor n�mero, e a soma dos outros dois 
  n�meros (que n�o s�o o maior nem o menor). (DESAFIO: Caso existam n�meros repetidos digitados, ap�s o usu�rio digitar os quatro n�meros, 
  n�o mostrar maior, menor nem soma, mas uma mensagem "Voc� digitou n�meros repetidos".) */
  funcao inicio() {

    inteiro numeros[4], i, numeroMax =0, numeroMin, somaNumeros, j
    logico repetido = falso

    para(i = 0; i <4; i++){
      escreva("Digite o �", i +1 ," n�mero: " )
      leia(numeros[i])
    }

    para(i=0; i<4; i++){
     	para(j=i+1; j<4; j++){

	 		  se(numeros[i] == numeros[j]){
	 			  repetido =verdadeiro 
	 			  pare
	 		}
	 		se(repetido){
        pare
       }
      }
     }

     se(repetido){

      escreva("Voc� digitou dois ou mais n�meros iguais. Resposta inv�lida!")
      
      }senao{
      numeroMin = numeros[0]
      para(i = 0; i <4; i++){
        se(numeros[i] < numeroMin){
          numeroMin = numeros[i]
        }
      }
      para(i = 0; i <4; i++){
        se(numeros[i] > numeroMax){
          numeroMax = numeros[i]
        }
      }
      somaNumeros = 0
      para(i = 0; i <4; i++){
        se(numeroMax != numeros[i] e numeroMin != numeros[i] ) {
          somaNumeros = somaNumeros + numeros[i]
        }
      }

      escreva("O maior � n�mero: ", numeroMax,"\n")
      escreva("O menor � n�mero: ", numeroMin, "\n")
      escreva("A soma dos dois outros n�meros �: ", somaNumeros, "\n")
     }
       
      }
   }
