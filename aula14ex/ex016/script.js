//alert('Olá')
function calcular() {
    var inicio = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txt2')
    var passo = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`// O EMOJI VEM ASSIM = U+1F913 é necessario
            }                                   //tirar o U+ e colocar \u{1F913}
        } else {
            // CONTAGEM REGRESSIVA
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}