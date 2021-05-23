// Crie um objeto que receba ao menos três propriedades sobre você.

// Adicione uma nova propriedade sem alterar seu objeto inicial.

// Remova uma propriedade desse objeto.

//Mostre no console todas as propriedades desse objeto.

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

// Mostre no console o nome de um amigo de cada lista.

let eu = {
    nome: "Beatriz",
    idade: 23,
    cordacamiseta: "amarelo"
}
eu.cidade = "São Paulo"
console.log(eu)

delete eu.cordacamiseta
console.log(eu)

let cadastro = [
    {
        name: "Beatriz",
        idade: 23,
        telefone: "123456789",
        amigos = ["a", "b", "Camila", "d"]
    },

    {
        name: "Mariazinha",
        idade: 20,
        telefone: "456891234",
        amigos = ["aa", "bb", "cc", "Denis"]
    },

    {
        name: "Carla",
        idade: 25,
        telefone: "548931657",
        amigos = ["e", "Francisca", "g", "h"]
    },

    {
        name: "João",
        idade: 22,
        telefone: "462130895",
        amigos = ["Ailson", "i", "j", "k"]
    },
    
    {
        name: "Cleyto",
        idade: 27,
        telefone: "364903156",
        amigos = ["l", "m", "Neide", "o"]
    }
]

console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[3])

console.log(cadastro[2].amigos[1], cadastro[3].amigos[1], cadastro[4].amigos[2])

//Danda, qual o jeito certo de fazer esses console.logs?