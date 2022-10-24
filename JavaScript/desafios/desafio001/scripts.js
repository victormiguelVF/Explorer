alert("Calculadora")

let number1 = prompt("Digite o primeiro número:")
let number2 = prompt("Digite o segundo número:")

number1 = Number(number1)
number2 = Number(number2)

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = (number1 / number2).toFixed(2)
let rest = number1 % number2

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${mult}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão entre os dois números é: ${rest}`)

if(sum % 2 == 0) {
    alert(`O número ${sum} é par`)
} else {
    alert (`O número ${sum} é ímpar`)
}

if(number1 == number2) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes")
}

