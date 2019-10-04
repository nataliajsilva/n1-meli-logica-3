// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.


function Terreno(largura,comprimento){
    this.largura = largura
    this.comprimento = comprimento
    this.area = largura * comprimento
}
const terreno1 = new Terreno (200,400)
const terreno2 = new Terreno (300,500)
const terreno3 = new Terreno (300,600)
const terreno4 = new Terreno (500,700)
const terreno5 = new Terreno (1000,1200)

Terreno.prototype.calcularPreco = function (){
    return this.preco = this.area * 1000
}
Terreno.prototype.mostrarInfos = function (){
    console.log(`A area é ${this.area}, e o preço é ${this.preco}`) 
}
terreno1.calcularPreco()
terreno2.calcularPreco()
terreno3.calcularPreco()
terreno4.calcularPreco()
terreno5.calcularPreco()

const terrenos = []
terrenos.push(terreno1,terreno2,terreno3,terreno4,terreno5)

function ordenaTerrenos (arrTerrenos){
    const ordenados = arrTerrenos.sort(function(a,b) {
        return a.preco - b.preco
    })
    console.log (ordenados)
}
ordenaTerrenos(terrenos)