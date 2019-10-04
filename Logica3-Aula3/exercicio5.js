// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: false
}
pokemon.action = function() {
    const frase = ['Lutar', 'Correr', 'Gritar']
    const rand = Math.floor(Math.random()* frase.length)  
    console.log (frase[rand])
}
pokemon.action()