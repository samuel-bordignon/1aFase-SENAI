programa
{
/*2) Jo�ozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura
	e cresce 3 cm por ano. Fa�a um programa que calcule e mostre em quantos anos Pedrinho ser� mais alto que Jo�ozinho.*/
	
	funcao inicio()
	{
		inteiro passagemAnos = 0
		real alturaPedro = 1.75, alturaJoao = 1.60 
		
		enquanto(alturaJoao < alturaPedro)
{
			passagemAnos ++
			alturaJoao = alturaJoao + 0.03
      alturaPedro = alturaPedro + 0.01
			}
			escreva("Jo�ozinho chegar� na altura de Pedrinho em ", passagemAnos, " anos")
	}
}

