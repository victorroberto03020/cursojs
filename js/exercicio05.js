let listaCompras = []
let listaFrutas = ["Maça", "Banana", "Kiwi", "Ameixa", "Abacaxi"]

listaCompras.push("Iorgute")
listaCompras.push("Tomate")
listaCompras.push("Kiwi")
listaCompras.push("Abacaxi")
listaCompras.push("Maça")

let numeroFrutas = 0

listaCompras.map((elemento) => {
    if (listaFrutas.includes(elemento)){
        numeroFrutas = numeroFrutas + 1
    }
})

if (numeroFrutas >= 3) {
    console.log("Deu certo, tenho 3 ou mais frutas")
} else {
    console.log("Preciso de mais frutas")
}