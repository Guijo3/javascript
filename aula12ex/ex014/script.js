//alert('Olá')
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dtn = window.document.getElementById('dtn')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 5 && hora < 12) {
        // BOM DIA !
        img.src = 'fotomanha.png'
        document.body.style.background = '#d1ae76'
        dtn.innerHTML = `<p><strong>BOM DIA !</strong></p>`
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE !
        img.src = 'fototarde.png'
        document.body.style.background = '#a36c58'
        dtn.innerHTML = `<p><strong>BOA TARDE !</strong></p>`
    } else {
        // BOA NOITE !
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b3849'
        dtn.innerHTML = `<p><strong>BOA NOITE !</strong></p>`
    }
}
