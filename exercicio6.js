//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.

/*primeiro metodo*/
//const numeros = [23, 45, 13, 71]
//numeros.splice (1,1)
//console.log(numeros)

/*segundo metodo*/
const numeros = [23, 45, 13, 71]
var pos = 1, n=1
var removerItens = numeros.splice (pos,n)
console.log(numeros)