/*
    Capure 10 itens para comprar a lista de um mercado.

    Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let items = [];

for( let item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item " + (item + 1))

    items[item] = itemName
}

alert(items)


