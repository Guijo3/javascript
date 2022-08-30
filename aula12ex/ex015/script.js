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
                img.setAttribute('src', 'bebehomi.png')
            } else if (idade >= 5 && idade <= 12) {
                // CRIANÇA
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 13 && idade <= 17) {
                // ADOLECENTE
                img.setAttribute('src', 'adolecentemasc.png')
            } else if (idade >= 18 && idade <= 25) {
                // JOVEM
                img.setAttribute('src', 'jovemhomi.png')
            } else if (idade >= 26 && idade <= 50) {
                // HOMEM
                img.setAttribute('src', 'homem.png')
            } else if (idade >= 51 && idade <= 65) {
                // HOMEM MADURO
                img.setAttribute('src', 'homemmaduro.png')
            } else if (idade > 65 && idade <= 120){
                // IDOSO
                img.setAttribute('src', 'velho.png')
            } else {
                // MUMIA
                img.setAttribute('src', 'mumia.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <= 4) {
                // BEBE
                img.setAttribute('src', 'bebemuie.png')
            } else if (idade >= 5 && idade <= 12) {
                // CRIANÇA
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 13 && idade <= 17) {
                // ADOLECENTE
                img.setAttribute('src', 'adolecentefem.png')
            } else if (idade >= 18 && idade <= 25) {
                // JOVEM
                img.setAttribute('src', 'jovemmuie.png')
            } else if (idade >= 26 && idade <= 50) {
                // MULHER
                img.setAttribute('src', 'mulher.png')
            } else if (idade >= 51 && idade <= 65) {
                // MULHER MADURA
                img.setAttribute('src', 'mulhermadura.png')
            } else if (idade > 65 && idade <= 120){
                // VELHA
                img.setAttribute('src', 'velha.png')
            } else {
                // ESQUELETA
                img.setAttribute('src', 'esqueleta.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)  // COMANDO PARA ADICIONAR UM ELEMENTO: (no caso) A IMAGEM DE RESULTADO 
    }
}