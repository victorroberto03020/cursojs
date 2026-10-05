function aluno(porcentagemAluno, notaA, notaB) {
    let media = (notaA + notaB)/2
    if (media > 6 && porcentagemAluno > 75) {
        return "Passou"
    } else {
        return "Reprovou"
    }
}

let avaliacaoAluno = aluno(75, 8, 7)

console.log(avaliacaoAluno)