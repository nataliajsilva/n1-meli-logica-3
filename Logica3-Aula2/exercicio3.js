// 3 - Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
//const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// exemplo:
// 4 4 4 4
// 5 6 6 7
// 9 9 9 9
// Resultado esperado -> 36

var posicao 
var novoArray = []
const array = [[23, 56, 9, 0], 
               [8, 24, 50, 5], 
               [9, 10, 40, 7], 
               [9, 48, 15, 2]]
for ( let i =0; i<4;i++){ // percorre a quantidade de linhas que devem ser somadas e armazena a soma da linha 
     var soma = 0
    for (let j=0;j<4;j++){ // percorre a quantidade de colunas (elementos) e soma cada elemento do indice
     posicao = array[i][j]
     soma = soma + posicao
    }
    novoArray[i]=soma // cria uma nova array com o resultado da soma de cada linha
}
console.log(Math.max(...novoArray));
