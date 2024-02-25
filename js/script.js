const x = document.querySelector('.x')
const o = document.querySelector('.o')
const boxes = document.querySelectorAll('.box')
const buttons = document.querySelectorAll('#buttons-container button')
const messageContainer = document.querySelector('#message')
const messageText = document.querySelector('#message p')
let secondPlayer

// CONTADOR DE JOGADAS
let player1 = 0
let player2 = 0

// ADICIONANDO O EVENTO DE CLICK AOS BOXES
for(let i = 0; i < boxes.length; i++) {
    // QUANDO ALGUÉM CLICA NA CAIXA
    boxes[i].addEventListener('click', function() {

        // VARIÁVEL INTERMEDIADORA
        let elemento = checkElemento(player1, player2)

        // SE A QUANTIDADE DE NÓS DENTRO DA box EM QUESTÃO FOR IGUAL A 0, OU SEJA, NÃO HOUVER x OU o, EXECUTAMOS A JOGADA
        if(this.childNodes.length == 0) {        
            // PARA EVITAR UTILIZAR O ELEMENTO JÁ EXISTENTE NO document CRIAMOS UM CLONE DELE POR MEIO DO method cloneNode()
            let cloneElemento = elemento.cloneNode(true)
            this.appendChild(cloneElemento)

            // COMPUTAR JOGADA
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
        }
    })
}

// FUNÇÃO QUE CHECA A VEZ DE QUEM DEVE JOGAR
function checkElemento(player1, player2) {
    if(player1 == player2) {
        // x
        elemento = x
    } else {
        // o
        elemento = o
    }

    return elemento
}