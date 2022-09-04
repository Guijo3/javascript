//alert('Olá')
let num = window.document.querySelector('input#txtn1')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {

}

function inLista(n, l) {

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
}