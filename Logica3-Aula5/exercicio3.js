//3
// const numbers = [3, 4, 5, 6, 6, 7]
// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois prite quantos numeros são maiores que 10
// // depois quantos são menores que 10.
// // printe o numero menor que 10.

const numbers = [3, 4, 5, 6, 6, 7];
const novoNumbers = numbers.map(function(item){
return item * 3 })
//console.log(novoNumbers)
const resultado1 = novoNumbers.filter(function(item) {
    return item > 10})
//console.log(resultado1)
const resultado2 = novoNumbers.filter(function(item) {
    return item < 10})
//console.log(resultado2)
const resultado3 = novoNumbers.find(function(item){
    return item < 10})
console.log(resultado3)

