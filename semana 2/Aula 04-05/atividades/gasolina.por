programa {
  funcao inicio() {

  /*Desenvolver um programa que realize o c�lculo de consumo de combust�vel por quilometragem, para ve�culos 
  (km por litro). Para isso, devem ser digitados os dados de dist�ncia total percorrida (km) e total de 
  combust�vel gasto (litros), mostrando o resultado ao final. */

  real quilometragem, combustivelGasto, resultado

  escreva("digite a dist�ncia percorrida em quilimetros: ")
  leia(quilometragem)
  escreva("digite os litros de combust�vel gastos: ")
  leia(combustivelGasto)
 resultado = quilometragem / combustivelGasto
 escreva(" combust�vel por quilometro: ", resultado)

    
  }
}
