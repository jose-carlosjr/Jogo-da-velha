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

            // CHECA QUEM VENCEU
            checkWinCondition()
        }
    })
}

// EVENTO PARA SABER QUEM É O JOGADOR, BOT OU UM SEGUNDO JOGADOR
for(let i = 0; i < buttons.length; i++) {
    // ADICIONA O EVENTO CLIQUE NOS BOTÕES
    buttons[i].addEventListener('click', function() {
        secondPlayer = this.getAttribute('id')
        
        // ESCONDE OS BOTÕES QUANDO UM DELES É CLICADO
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        /* OU
        buttons[0].style.display = 'none'
        buttons[1].style.display = 'none'
        */
        
        // REVELANDO O JOGO
        setTimeout(() => {
            const container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 500);
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

// FUNÇÃO PARA CHECAR QUEM VENCEU
function checkWinCondition() {
    const box1 = document.getElementById('block-1')
    const box2 = document.getElementById('block-2')
    const box3 = document.getElementById('block-3')
    const box4 = document.getElementById('block-4')
    const box5 = document.getElementById('block-5')
    const box6 = document.getElementById('block-6')
    const box7 = document.getElementById('block-7')
    const box8 = document.getElementById('block-8')
    const box9 = document.getElementById('block-9')

    // VITÓRIA NA HORIZONTAL
    if(box1.childNodes.length > 0 && box2.childNodes.length > 0 && box3.childNodes.length > 0) {
        let box1Child = box1.childNodes[0].className
        let box2Child = box2.childNodes[0].className
        let box3Child = box3.childNodes[0].className
        
        if(box1Child == 'x' && box2Child == 'x' && box3Child == 'x') {
            declareWinner('x')
        } else if (box1Child == 'o' && box2Child == 'o' && box3Child == 'o') {
            declareWinner('o')
        }
    }

    if(box4.childNodes.length > 0 && box5.childNodes.length > 0 && box6.childNodes.length > 0) {
        let box4Child = box4.childNodes[0].className
        let box5Child = box5.childNodes[0].className
        let box6Child = box6.childNodes[0].className
        
        if(box4Child == 'x' && box5Child == 'x' && box6Child == 'x') {
            declareWinner('x')
        } else if (box4Child == 'o' && box5Child == 'o' && box6Child == 'o') {
            declareWinner('o')
        }
    }

    if(box7.childNodes.length > 0 && box8.childNodes.length > 0 && box9.childNodes.length > 0) {
        let box7Child = box7.childNodes[0].className
        let box8Child = box8.childNodes[0].className
        let box9Child = box9.childNodes[0].className
        
        if(box7Child == 'x' && box8Child == 'x' && box9Child == 'x') {
            declareWinner('x')
        } else if (box7Child == 'o' && box8Child == 'o' && box9Child == 'o') {
            declareWinner('o')
        }
    }

    // VITÓRIA NA VERTICAL
    if(box1.childNodes.length > 0 && box4.childNodes.length > 0 && box7.childNodes.length > 0) {
        let box1Child = box1.childNodes[0].className
        let box4Child = box4.childNodes[0].className
        let box7Child = box7.childNodes[0].className
        
        if(box1Child == 'x' && box4Child == 'x' && box7Child == 'x') {
            declareWinner('x')
        } else if (box1Child == 'o' && box4Child == 'o' && box7Child == 'o') {
            declareWinner('o')
        }
    }

    if(box2.childNodes.length > 0 && box5.childNodes.length > 0 && box8.childNodes.length > 0) {
        let box2Child = box2.childNodes[0].className
        let box5Child = box5.childNodes[0].className
        let box8Child = box8.childNodes[0].className
        
        if(box2Child == 'x' && box5Child == 'x' && box8Child == 'x') {
            declareWinner('x')
        } else if (box2Child == 'o' && box5Child == 'o' && box8Child == 'o') {
            declareWinner('o')
        }
    }

    if(box3.childNodes.length > 0 && box6.childNodes.length > 0 && box9.childNodes.length > 0) {
        let box3Child = box3.childNodes[0].className
        let box6Child = box6.childNodes[0].className
        let box9Child = box9.childNodes[0].className
        
        if(box3Child == 'x' && box6Child == 'x' && box9Child == 'x') {
            declareWinner('x')
        } else if (box3Child == 'o' && box6Child == 'o' && box9Child == 'o') {
            declareWinner('o')
        }
    }

    // VITÓRIA NA DIAGONAL

    if(box1.childNodes.length > 0 && box5.childNodes.length > 0 && box9.childNodes.length > 0) {
        let box1Child = box1.childNodes[0].className
        let box5Child = box5.childNodes[0].className
        let box9Child = box9.childNodes[0].className
        
        if(box1Child == 'x' && box5Child == 'x' && box9Child == 'x') {
            declareWinner('x')
        } else if (box1Child == 'o' && box5Child == 'o' && box9Child == 'o') {
            declareWinner('o')
        }
    }

    if(box3.childNodes.length > 0 && box5.childNodes.length > 0 && box7.childNodes.length > 0) {
        let box3Child = box3.childNodes[0].className
        let box5Child = box5.childNodes[0].className
        let box7Child = box7.childNodes[0].className
        
        if(box3Child == 'x' && box5Child == 'x' && box7Child == 'x') {
            declareWinner('x')
        } else if (box3Child == 'o' && box5Child == 'o' && box7Child == 'o') {
            declareWinner('o')
        }
    }

    // EM CASO DE EMPATE
    let incremento = 0

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            incremento++
        }
    }
    
    if(incremento == 9) {
        declareWinner()
    }
}

// FUNÇÃO QUE LIMPA O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR
function declareWinner(winner) {
    const scoreboardX = document.querySelector('#scoreboard-1')
    const scoreboardO = document.querySelector('#scoreboard-2')
    let msg = ''

    // ESTABELECE AS CONDIÇÕES PARA O RESULTADO DA PARTIDA 
    if(winner == 'x') {
        // PLACAR RECEBE A SI MESMO CONVERTIDO EM Number/Integer E ACRESCENTA 1
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O Jogador 1 venceu!'
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = 'O Jogador 2 venceu!'
    } else {
        msg = 'Empate!'
    }

    // EXIBE A MENSAGEM
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    // ESCONDE A MENSAGEM APÓS 3 SEGUNDOS
    setTimeout(() => {
        messageContainer.classList.add('hide')

        // REINICIANDO O JOGO
        let boxesToRemove = document.querySelectorAll('.box div') // RECEBE AS BOXES QUE CONTENHAM divs

        for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentElement.removeChild(boxesToRemove[i])
        }
    }, 3000);

    // ZERAR AS JOGADAS
    player1 == 0
    player2 == 0
}