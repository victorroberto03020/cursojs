let alunos = ["Miguel" , "Benicio" , "Yara" , "Sophia" , "Fabricio"]
let alunoNovo = "Raquel"

if (alunos.length < 10) {
    alunos.push(alunoNovo)
    console.log("Conseguiu adicionar aluno novo!")
} else {
    console.log("Capacidade máxima de alunos atingidos!")
}

console.log(alunos)