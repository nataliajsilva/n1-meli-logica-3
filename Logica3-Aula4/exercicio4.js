// 4 - use a função calcular preco para que todas as instancias tenham seus precos.
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
    return this.area + this.preco
}
terreno1.calcularPreco()
terreno2.calcularPreco()
terreno3.calcularPreco()
terreno4.calcularPreco()
terreno5.calcularPreco()
console.log(terreno1,terreno2,terreno3,terreno4,terreno5)

