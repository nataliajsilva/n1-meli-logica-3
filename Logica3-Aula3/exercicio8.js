// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor


const pokemon = {
    nome: 'Bulbasaur',
    nomeJapones: 'Fushigidane',
    nJohto: '231',
    ev: 'Ovo',
    sabeVoar: false
}
for (const item in pokemon){
    console.log(`Propriedade: ${item} | Valor: ${pokemon[item]}`)
}