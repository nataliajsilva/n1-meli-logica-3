// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela

/*const lista = [1,2,30,4,50,6,70,8,9,0]
for (let i = 0;i<lista.length;i++){
    if (lista[i] % 2 != 0){
        console.log(lista[i])
    }
}*/

/*const array = []
for (let i = 1; i<10;i++){
    if (i % 2 === 1) {
        array.push(i)

    }
}
console.log(array)*/

let count = 0
const array = []
for (let i = 1; count < 10; i++) {
    if (i % 2 !== 0) {
        array.push(i)
        count++
    }

}
console.log(array)

