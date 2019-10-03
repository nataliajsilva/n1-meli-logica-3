// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev:'Ovo'
}
pokemon.propriedades = function() {
    console.log(`As propriedades do meu pokemon são: ${pokemon.nome}, ${pokemon.nomeJapones}, ${pokemon.nJohto} e ${pokemon.ev}.`)
}
pokemon.propriedades()

