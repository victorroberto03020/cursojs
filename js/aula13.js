let pessoa = {
    nome: "Victor",
    estudar() {
        console.log("estudando")
    },
    idade: 20
}

let pessoa2 = {
    nome: "Roberto",
    estudar() {
        console.log("estudando")
    },
    idade: 21
}

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.estudar()

let lista = [pessoa, pessoa2]
console.log(lista)