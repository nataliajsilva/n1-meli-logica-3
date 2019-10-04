// 7.
// Printe todas as propriedades
// do seu pokemon no console.

const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: false
}
for (const item in pokemon){
    console.log(item)
}