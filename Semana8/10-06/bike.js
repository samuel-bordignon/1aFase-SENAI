let nomeEquipe = prompt('digite o nome de sua equipe: ')
let ciclUm = prompt('Digite o nome de ciclista número 1: ')
let ciclDois = prompt('Digite o nome de ciclista número 2: ')
let ciclTres = prompt('Digite o nome de ciclista número 3: ')
let ciclQuatro = prompt('Digite o nome de ciclista número 4: ')

let tempTrechoUm = parseInt(prompt('Digite o tempo, em horas, do ciclista número 1:'))
let tempTrechoDois = parseInt(prompt('Digite o tempo, em horas, do ciclista número 2:'))
let tempTrechoTres = parseInt(prompt('Digite o tempo, em horas, do ciclista número 3:'))
let tempTrechoQuatro = parseInt(prompt('Digite o tempo, em horas, do ciclista número 4:'))

let mediaVeloUm = 30 / tempTrechoUm
let mediaVeloDois = 45 / tempTrechoDois
let mediaVeloTres = 30 / tempTrechoTres
let mediaVeloQuatro = 35 / tempTrechoQuatro
let somaMedias = mediaVeloUm + mediaVeloDois + mediaVeloTres + mediaVeloQuatro

alert(`Velocidade média do ciclista numero 1: ${mediaVeloUm.toFixed(2)} Km/h \nVelocidade média do ciclista numero 2: ${mediaVeloDois.toFixed(2)} Km/h \nVelocidade média do ciclista numero 3: ${mediaVeloTres.toFixed(2)} Km/h \nVelocidade média do ciclista numero 4: ${mediaVeloQuatro.toFixed(2)} Km/h \nVelocidade média da esquipe: ${somaMedias} Km/h`)

if(somaMedias < 15){
    alert("Desempenho pode melhorar bastante!")
}else if(somaMedias >= 15 && somaMedias <= 18){
    alert("Desempenho bom, mas ainda pode melhorar!")
}else if(somaMedias > 18){
    alert("Desempenho excelente. Parabéns!")
}