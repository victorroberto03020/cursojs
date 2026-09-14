let notaFinal = 55

if ( notaFinal > 60) {
    console.log("Você passou de ano!")
} else if (notaFinal >= 50 && notaFinal <= 60) {
    console.log("Prova de recuperação!")
} else {
    console.log("Você está reprovado!")
}


let pagouBoleto = true 
let venceu = true

if (pagouBoleto == true && venceu == false) {
    console.log("Compra confirmada!")
} else if (pagouBoleto == false && venceu == false) {
    console.log("Aguardando pagamento!")
} else if (venceu == true) {
    console.log("Compra cancelada!")
}