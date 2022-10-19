/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleando é obrigatório (condizionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(false ? 'verdadeiro' : 'false')
console.log(0 ? 'verdadeiro' : 'false')
console.log(-0 ? 'verdadeiro' : 'false')
console.log("" ? 'verdadeiro' : 'false')
console.log(null ? 'verdadeiro' : 'false')
console.log(undefined ? 'verdadeiro' : 'false')
console.log(NaN ? 'verdadeiro' : 'false')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleando é obrigatório (condizionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? 'verdadeiro' : 'false')
console.log({} ? 'verdadeiro' : 'false')
console.log([] ? 'verdadeiro' : 'false')
console.log(1 ? 'verdadeiro' : 'false')
console.log(3.23 ? 'verdadeiro' : 'false')
console.log("0" ? 'verdadeiro' : 'false')
console.log("false" ? 'verdadeiro' : 'false')
console.log(-1 ? 'verdadeiro' : 'false')
console.log(Infinity ? 'verdadeiro' : 'false')
console.log(-Infinity ? 'verdadeiro' : 'false')
