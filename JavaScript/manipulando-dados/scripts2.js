// Manipulando Strings e Números

// Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palabra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number1 = 1234
console.log(String(number1).length)

// Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula
let number3 = 123.1234567891011
console.log(number3.toFixed(2).replace(".", ","))

//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word1 = "programar é muito bacana!"
let word2 = "PROGRAMAR É MUITO BACANA!"
console.log(word1.toUpperCase())
console.log(word2.toLowerCase())