function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(4, 2)) // caso aki nos parametros REAL se só tiver um valor
                        // para não ficar NaN ou um dos parametros como indefinido
                        // é necessário lá em cima nos parametro 
                        // FORMAL tipo (n1, n2) é necessário add um parametro opcional
                        // tipo assim  (n1=0, n2=0)