let num = [5, 8, 2, 9, 3]


let pos = num.indexOf(8) // esse comando irá mostrar em qual indice o conteudo se encontra
if (pos == -1) { // se o resultado der -1 quer dizer q o conteudo não foi encontrado
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}





//num.push(1) // vai adicionar mais um conteudo no final do vetor. recomendado usar esse comando logo apos a declaração do vetor, em seguida o comando: nomedavariavel.sort() para organizar os conteudos
//num.sort() // comando p/ mostrar os conteudos do vetor em ordem do < p/ o >
//console.log(`o primeiro valor do vetor é ${num[0]}`) a contagem do vetor começa na posição: 0º, 1º, 2º, 3º,...etc
//console.log(`O vetor tem ${num.length} posições`) p/ saber o comprimento do vetor
//console.log(`Nosso vetor é o: ${num}`) //para mostrar o vetor inteiro