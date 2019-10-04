// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)

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

