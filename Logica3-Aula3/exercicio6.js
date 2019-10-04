// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: false
}
pokemon.pergunta = function() {
    console.log (`O que o  ${pokemon.nome} vai fazer?`)
}    
pokemon.pergunta()
pokemon.action = function() {
    const frase = ['Lutar', 'Correr', 'Gritar']
    const rand = Math.floor(Math.random()* frase.length)  
    console.log (frase[rand])
}
pokemon.action()
