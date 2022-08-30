//alert('Olá')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')  // CRIANDO IMAGENS DINAMICAMENTE POR JS
        img.setAttribute('id', 'foto')      // ATRIBUINDO UM ID COM NOME FOTO PARA A TAG IMG
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <= 4) {
                // BEBE
                img.setAttribute('src', 'foto-bebehomi.png')
            } else if (idade >= 5 && idade <= 12) {
                // CRIANÇA
            } else if (idade >= 13 && idade <= 17) {
                // ADOLECENTE
            } else if (idade >= 18 && idade <= 25) {
                // JOVEM
            } else if (idade >= 26 && idade <= 50) {
                // HOMEM
            } else if (idade >= 51 && idade <= 65) {
                // HOMEM MADURO
            } else {
                // IDOSO
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <= 4) {
                // BEBE
            } else if (idade >= 5 && idade <= 12) {
                // CRIANÇA
            } else if (idade >= 13 && idade <= 17) {
                // ADOLECENTE
            } else if (idade >= 18 && idade <= 25) {
                // JOVEM
            } else if (idade >= 26 && idade <= 50) {
                // MULHER
            } else if (idade >= 51 && idade <= 65) {
                // MULHER MADURO
            } else {
                // IDOSA
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}