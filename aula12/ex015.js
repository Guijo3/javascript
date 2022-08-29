var agora = new Date()
var diaSem = agora.getDay()  // .getDay comando usado para mostrar o dia da semana em JS

//diaSem = 5 // Colocar Valor da semana Forçadamente

/*
    0 = Domingos
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSem)  // comando para mostrar na tela o dia sem converter tipo 0,1,2... 

//colocar o comando break é obrigatório 

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}