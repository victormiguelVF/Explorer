const notes = [
    {
        name: "Victor",
        note1: 6.5,
        note2: 7.4,
        note3: 8,
        note4: 5.3,
    },
    {
        name: "Karen",
        note1: 9.0,
        note2: 8.8,
        note3: 8.7,
        note4: 9.3,
    },
    {
        name: "Lohan",
        note1: 9.0,
        note2: 8.5,
        note3: 8.0,
        note4: 7.3,
    },
] 

function media(note1, note2, note3, note4) {
    return ((note1 + note2 + note3 + note4) / 4).toFixed(2)
}

function printNote(note) {
   if(media(note.note1, note.note2, note.note3, note.note4) >= 7) {
   return `A média do(a) aluno(a) ${note.name} é: ${media(note.note1, note.note2, note.note3, note.note4)}
Parabéns, ${note.name}! Você foi aprovado(a) no concurso!`
   } else {
    return `A média do(a) aluno(a) ${note.name} é: ${media(note.note1, note.note2, note.note3, note.note4)}
Não foi dessa vez, ${note.name}! Tente novamente!`
   }
}

for (let note of notes){
    let mediaMessage = printNote(note)
    alert(mediaMessage)
}

