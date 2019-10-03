// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones:'Fushigidane',
    nJohto: '231',
    ev:'Ovo'
}
pokemon.apresentacao = function() {
    console.log(`Oi, meu nome ${pokemon.nome} e meu nome japones é ${pokemon.nomeJapones}.`)
}
pokemon.apresentacao()