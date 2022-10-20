/*
    Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

alert("Boletim")

let student = prompt("Nome do aluno(a):")
let note1 = prompt("Nota 1:")
let note2 = prompt("Nota 2:")
let note3 = prompt("Nota 3:")

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

let media = (note1 + note2 + note3) / 3
media = Number(media)
media = media.toFixed(2)

alert("A média do(a) " + student + " é " + media)

if(media >= 6) {
    alert(student + " está aprovado com média: " + media)
} else if(media <= 3) {
    alert(student + ", você está reprovado! Sua média foi: " + media)
}
 else {
    alert(student + " está de recuperação com média: " + media)
}

