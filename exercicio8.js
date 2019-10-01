// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.

const lista = [23, 43, 63 ,73, 83, 93, 102]
const novaArray = []
for (let i = 0;i<=lista.length -1;i++){
    novaArray.push(lista[i]+2)
}
console.log(novaArray)