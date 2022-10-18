/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

let date = new Date("2022-10-18")

console.log(date)

function Person(name) {
  this.name = name
  this.walk = function() {
      return this.name + " está andando"
  }
}

const victor = new Person("Victor")
const mayk = new Person("Mayk")
console.log(victor.walk())
console.log(mayk.walk())