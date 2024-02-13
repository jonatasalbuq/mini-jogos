import { regexp } from "./validations.js"

// Caso o jogador aperte o botão de voltar, esta função torna padrão certas coisas
export function Return(gameControl, selectors){
    // A opção de modo do jogo escolhida desaparece
    selectors.optSingleplayer.style.display = "none"
    selectors.optMultiplayer.style.display = "none"

    // A tela de opções de modos do jogo aparece
    selectors.gamemodes.style.display = "flex"

    // O botão de voltar desaparece
    selectors.returnBtn.style.display = "none"

    // O botão "Iniciar" e "Salvar" desaparece
    selectors.startBtn.style.display = "none"
    selectors.saveBtn.style.display = "none"

    // A mensagem de alerta é apagada e desaparece para não aparecer no menu de gamemodes
    selectors.alertMsg.textContent = null
    selectors.alertMsg.style.display = "none"

    // Apaga o conteúdo digitado no input anteriormente
    selectors.singleplayerInp.value = null
    selectors.multiplayerInp.value = null

    // Reseta o estilo do input
    selectors.singleplayerInp.style.backgroundColor = "white"
    selectors.multiplayerInp.style.backgroundColor = "white"
    
    // Desativa ambos modos de jogo
    gameControl.singleplayer = false
    gameControl.multiplayer = false

    // A janela de input de nomes multiplayer desaparece
    selectors.playersname.style.display = "none"

    // Reseta o contador de cliques do botão "Salvar" da opção multiplayer
    gameControl.clickCount = 0

    // Reseta o contador de número de jogador da opção multiplayer
    selectors.playerNumber.textContent = 1

    // O nome dos jogadores são apagados
    Object.keys(gameControl.players).forEach(key => {
        gameControl.players[key] = null
    })
}

export function Save(gameControl, selectors){
    // A janela que pede a quantidade de jogadores desaparece
    selectors.quantityPlayers.style.display = "none"
    // A tela onde é inserido os nomes dos jogadores aparecem
    selectors.playersname.style.display = "block"
    // O botão "Salvar" desaparece
    selectors.saveBtn.style.display = "none"
    // O contador de cliques no botão "Salvar" é incrementado
    gameControl.clickCount++

    switch(gameControl.clickCount){
        case 1:     // 1 = primeiro clique no botão (pressionado após selecionar a quantidade de jogadores)
            // Coloca o total de jogadores que participarão, no objeto
            gameControl.totalplayers = Number(selectors.totalplayers.value)
            selectors.multiplayerInp.focus()
            break

        case 2:     // 2 = segundo clique no botão (pressionado após o jogador 1 digitar seu nome)
            // Armazena o nome do jogador 1, no objeto
            gameControl.players.player1 = selectors.multiplayerInp.value
            // Muda o contador para 2
            selectors.playerNumber.textContent = 2
            selectors.multiplayerInp.focus()
            break

        case 3:     // 3 = terceiro clique no botão (pressionado após o jogador 2 digitar seu nome)
            // Armazena o nome do jogador 2, no objeto
            gameControl.players.player2 = selectors.multiplayerInp.value
            // Muda o contador para 3
            selectors.playerNumber.textContent = 3
            selectors.multiplayerInp.focus()
            break

        case 4:     // 4 = quarto clique no botão (pressionado após o jogador 3 digitar seu nome)
            // Armazena o nome do jogador 3, no objeto
            gameControl.players.player3 = selectors.multiplayerInp.value
            // Muda o contador para 4
            selectors.playerNumber.textContent = 4
            selectors.multiplayerInp.focus()
            break
        
        case 5:     // 5 = quinto clique no botão (pressionado após o jogador 4 digitar seu nome)
            // Armazena o nome do jogador 4, no objeto
            gameControl.players.player4 = selectors.multiplayerInp.value
            break
            
        default:    // Recarrega a página caso ocorra alguma excessão
            location.reload()
    }
    // Limpa o campo de inserção do nome
    selectors.multiplayerInp.value = null
}

// Caso o jogador clique no botão "Iniciar", esta função é executada
export function Start(gameControl, selectors){

    // Se de alguma maneira o jogador conseguir driblar todas as condições da função de validação
    if(gameControl.singleplayer){
        let playerInpValue = selectors.singleplayerInp.value

        // Última validação do nome do jogador
        if(playerInpValue.length == 0 || playerInpValue.length > 15 || playerInpValue.length < 3 ||
            regexp.test(playerInpValue)){
            // Uma caixa de alerta será disparada
            alert("Nome inválido. Não pode ficar em branco, conter espaços ou ultrapassar o limite de caracteres.")

            // A página é recarregada
            location.reload()
        } else{
            // Atribui o nome do jogador solo no objeto
            gameControl.players.playerSolo = playerInpValue
            // Armazena as engrenagens do jogo no localStorage
            localStorage.setItem("GameControl", gameControl)
        
            // A janela vai ser movida para baixo
            selectors.menuCard.style.animation += "MoverMenu 2.5s"
            // O título do jogo será movido para cima
            selectors.title.style.animation += "MoverTitulo 2.5s"
        
            // Função que redirecionará para outra parte da página
            setTimeout(() => location.href = "game.html", 2000)
        
            // Apaga o que foi digitado no campo
            playerInpValue = null
        }
    }

    if(gameControl.multiplayer){
        let status = "OK"
        let keys = Object.keys(gameControl.players)

        for(let i = 1; i <= gameControl.totalplayers; i++){
            let key = keys[i]
            
            
            // Trata o último jogador (que tem seu nome nulo) atribuindo seu devido nome
            if(gameControl.players[key] == null){
                // Atribui na propriedade com o valor nulo (último jogador) o valor atual do input
                gameControl.players[key] = selectors.multiplayerInp.value
            }

            // Última validação do nome dos jogadores
            if(gameControl.players[key].length == 0 || gameControl.players[key].length > 15 ||
            gameControl.players[key].length < 3 || regexp.test(gameControl.players[key])){
                // Altera o status como falha, caso esta condição seja executada
                status = "FAIL"

                // Uma caixa de alerta será disparada
                alert("Nome inválido. Não pode ficar em branco, conter espaços ou ultrapassar o limite de caracteres.")

                // A página é recarregada
                location.reload()
            }
        }

        // Executada se o status permanecer "OK"
        if(status == "OK"){
            // Armazena as engrenagens do jogo no localStorage
            localStorage.setItem("GameControl", gameControl)

            // A janela vai ser movida para baixo
            selectors.menuCard.style.animation += "MoverMenu 2.5s"

            // O título do jogo será movido para cima
            selectors.title.style.animation += "MoverTitulo 2.5s"

            // Função que redirecionará para outra parte da página
            setTimeout(() => location.href = "game.html", 2000)

            // Apaga o que foi digitado no campo
            selectors.multiplayerInp.value = null
        }
    }
}