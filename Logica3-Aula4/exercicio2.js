// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

function Terreno(largura,comprimento){
    this.largura = largura
    this.comprimento = comprimento
    this.area = largura * comprimento
}
Terreno.prototype.calcularPreco = function (){
    return this.preco = this.area * 1000
}
Terreno.prototype.mostrarInfos = function (){
    console.log(`A area é ${this.area}, e o preço é ${this.preco}`)
}