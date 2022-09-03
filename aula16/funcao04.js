// função para mostrar o fatorial de um numero
// MANEIRA TRADICIONAL

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c  // fatorial vai receber fatorial vezes * o C
    }
    return fat
}

console.log(fatorial(5))

//fatorial
// 5! = 5 x 4 x 3 x 2 x 1 = 120