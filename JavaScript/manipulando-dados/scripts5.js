// Manipulando Arrays

// Criar Array com constructor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de uma array
console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do início
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)


