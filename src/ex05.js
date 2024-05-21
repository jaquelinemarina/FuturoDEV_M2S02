// Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

let numeros = [1, 2, 3, 4, 5]

function calcularProduto(numeros) {
    return numeros.reduce((produto, numero) => produto * numero, 1)
}

console.log(calcularProduto(numeros)) // 120