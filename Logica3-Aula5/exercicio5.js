//5 -
// const mulheres = [
//   {
//     user: 234,
//     name: "Marcia",
//     idade: 40,
//     hobbies: ["estudar", "comer", "falar"]
//   },
//   {
//     user: 235,
//     name: "Lorena",
//     idade: 20,
//     hobbies: ["dançar", "assistir tv", "estudar"]
//   },
//   {
//     user: 236,
//     name: "Patricia",
//     idade: 24,
//     hobbies: ["correr", "acampar", "surfar"]
//   },
//   {
//     user: 237,
//     name: "Mariana",
//     idade: 15,
//     hobbies: ["skate", "bicicleta", "break dance"]
//   },
//   {
//     user: 238,
//     name: "Isis",
//     idade: 34,
//     hobbies: ["ler", "estudar", "discutir"]
//   },
//   {
//     user: 239,
//     name: "Pietra",
//     idade: 23,
//     hobbies: ["jogar dominó", "sinuca", "cartas"]
//   }
// ]

// retore a mulher que tiver o user = 238
// retorne o nome das mulheres que gostam de estudar

const mulheres = [
    { user: 234, name: "Marcia", idade: 40, hobbies: ["estudar", "comer", "falar"] },
    { user: 235, name: "Lorena", idade: 20, hobbies: ["dançar", "assistir tv", "estudar"] },
    { user: 236, name: "Patricia", idade: 24, hobbies: ["correr", "acampar", "surfar"] },
    { user: 237, name: "Mariana", idade: 15, hobbies: ["skate", "bicicleta", "break dance"] },
    { user: 238, name: "Isis", idade: 34, hobbies: ["ler", "estudar", "discutir"] },
    { user: 239, name: "Pietra", idade: 23, hobbies: ["jogar dominó", "sinuca", "cartas"] }
]
const user = mulheres.find(function (item) {
    return item.user === 238
})
//console.log(user.name) caso queira saber o nome da posição

// outra forma
// const filtroHobbies = mulheres.filter(item =>  item.hobbies.indexOf('estudar')
const filtroHobbies = mulheres.filter(function (item) {
    return item.hobbies.indexOf('estudar') > -1
})

filtroHobbies.map(function (item)s {
    console.log(item.name)
})

//console.log(filtroHobbies)
