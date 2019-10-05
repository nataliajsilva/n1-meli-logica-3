//1
// const numbers = [1,3,4,6,8,9,56,34,23,2,89,101,320,12,13,45,40,43,88]
//
// retorne numeros multiplos de 3
// retorne numeros multiplos de 3 e de 5

/*const numbers = [1,3,4,6,8,9,56,34,23,2,89,101,320,12,13,45,40,43,88]
const resultado = numbers.filter(function(item) {
    return item %3 === 0})

console.log(resultado)*/

const numbers = [1,3,4,6,8,9,56,34,23,2,89,101,320,12,13,45,40,43,88]
//outra forma
// const resultado = numbers.filter (num => num %3 === 0)
const resultado = numbers.filter(function(item) {
    return item %3 === 0 && item %5 === 0})

console.log(resultado)



