let podeDirigir = true
let stringTrue = "true"

// console.log("o tipo da variavel podeDirigir é: " + typeof podeDirigir)
// console.log("o tipo da variavel stringTrue é: " + typeof stringTrue)

let nomeA = "Joao"
let nomeB = "Joao"

let igual = (nomeA == nomeB)
// console.log(igual)

let numeroA = 15
let numeroB = 20
let comparacao = 15 == 20

// console.log("Os numeros são iguais? " + comparacao)

let lista = ["elemento A", "elemento B"]

let inclui = lista.includes("elemento C")
// console.log(inclui)

let nota1 = 70
let nota2 = 85
let nota3 = 20
let nota4 = 90

let passouDeAno = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4 > 60)
// console.log("O aluno passou de ano? " + passouDeAno)

// -------------------------------------------------------------------

let passouEnem = false
let passouVestibular = true

let entrouFaculdade = (passouEnem == true || passouVestibular == true)
console.log("Conseguiu entrar pra faculdade? " + entrouFaculdade)