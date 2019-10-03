//Função para criar matriz através de quantidade de linhas e colunas determinadas no parâmetro

function matriz (linha,coluna,inicio){
    const arr = []
let count = inicio
for (let i = 0; i < linha; i++) {
  const linha = []
  for (let j = 0; j < coluna; j++) {
    linha[j] = count
    count++
  }
  arr[i] = linha
}
console.log(arr)
}
matriz(10,3,1)