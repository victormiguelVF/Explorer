/* 

    Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação, mostrar um alerta com o resultado.

*/

alert("Iremos fazer operações matemáticas com dois números.")

let number1 = prompt("Digite o primeiro número:")
let number2 = prompt("Digite o segundo número:")

number1 = Number(number1)
number2 = Number(number2)

let sum = number1 + number2
let sub= number1 - number2
let mult = number1 * number2
let div = number1 / number2
let restDiv = number1 % number2

alert("O resultado da soma desses números é: " + sum)
alert("O resultado da subtração desses números é: " + sub)
alert("O resultado da multiplicação desses números é: " + mult)
alert("O resultado da divisão desses números é: " + div)
alert("O resultado do resto da divisão desses números é: " + restDiv)
