const pilotos = ['Vettel', 'Verstappen' , 'Alonso', 'Massa', 'Hamilton', 'Russell']

const pilotosRedbull = pilotos.slice(0, 2) // primeiro elemento é o índice de onde começa o novo array, até o indice tal, exclusive
const pilotosFerrari = pilotos.slice(2, 4)
const pilotosMercedes = pilotos.slice (4)
console.log(pilotosRedbull)
console.log(pilotosFerrari)
console.log(pilotosMercedes)

pilotos.pop() // Russell quebrou o carro
console.log(pilotos)

pilotos.push('Sargeant')
console.log(pilotos)

console.log(pilotos.length) //temos 7 pilotos na corrida

pilotos.shift() //Retira o que está na primeira posição

pilotos.unshift('Sergio Pérez') //Coloca um piloto na primeira posição

console.log(pilotos)



