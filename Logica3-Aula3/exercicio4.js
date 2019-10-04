// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: true
}
pokemon.voar = function() {
    if (pokemon.sabeVoar == true){
    console.log(`Eu sei voaaaaar`)  
    } else {
        console.log(`Eu não sei voar :'(`)
    }   
}
pokemon.voar()