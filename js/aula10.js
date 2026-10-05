function preparativoReceita() {
    console.log("Deixar as vasilhas limpas")
    console.log("Ter os ingredientes")
    console.log("Pré aquecer o forno")
}

//preparativoReceita()

function rotina() {
    console.log("Tomar banho")
    console.log("Comer alguma coisa")
    console.log("Escovar os dentes")
}

//rotina()

function soma(numeroA, numeroB) {
    let soma = numeroA + numeroB
    console.log(soma)
}

//soma(10, 15)

function calcularMedia(notaA, notaB){
    let soma = notaA + notaB
    let media = soma/2
    return media
}

let media1 = calcularMedia(53,35)
let media2 = calcularMedia(12,48)

console.log(media1)
console.log(media2)