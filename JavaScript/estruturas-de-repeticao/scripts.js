// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}

for(let n = 0; n <= 20; n++) {
    if(n === 10) {
        break
    }

    console.log(n)
}

// while

let x = 100000
while(x >= 10) {
    console.log(x)

    x /= 10
}

// for...of

let name = 'Victor'
let names = ['Leandro', 'Yuri', 'VH']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

//for..in

let person = {
    name: 'Victor',
    age: 26,
    weight: 88
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
