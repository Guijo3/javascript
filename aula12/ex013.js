var hora = 20
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora <= 4) {
    console.log('Boa Madrugada!')
} else if (hora >= 5 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa Tarde!')
} else { // ou (hora >= 19 && hora <= 24)
    console.log('Boa Noite!')
}