//alert('Olá')
function tabuada() {
    var num = window.document.getElementById('txtn1')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //comando para antes de mostrar a tabela, limpar a area da tabela
        while (c <= 10) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//comando p/ mostrar em outras linguagens qual item foi selecionado
            tab.appendChild(item)//na tabela. adicionar um elemento filho que vai ser (item)
            c++
        }
    }
    

}