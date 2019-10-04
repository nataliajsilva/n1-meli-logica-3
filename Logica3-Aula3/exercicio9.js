//9 Faça uma função construtora de pokemon

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: false
}
function Pokemon(nome,nomeJapones,ev){
    this.nome =nome
    this.nomeJapones=nomeJapones
    this.ev=ev
}
const pokemon2 = new Pokemon ('Metapod','Transel','Caterpie')
console.log(pokemon2.nome)

//Outra forma de criar objeto
const pokemon2 = new Pokemon ('Metapod','Transel','Caterpie')
Pokemon.prototype.jogarBola = function (){
    console
}
console.log(pokemon2.nome)

