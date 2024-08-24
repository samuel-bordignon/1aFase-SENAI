programa {
  funcao inicio() {

  /*Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos 
  (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de 
  combustível gasto (litros), mostrando o resultado ao final. */

  real quilometragem, combustivelGasto, resultado

  escreva("digite a distância percorrida em quilimetros: ")
  leia(quilometragem)
  escreva("digite os litros de combustível gastos: ")
  leia(combustivelGasto)
 resultado = quilometragem / combustivelGasto
 escreva(" combustível por quilometro: ", resultado)

    
  }
}
