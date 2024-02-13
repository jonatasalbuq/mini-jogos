export let regexp = /\s/

// Caso o jogador tenha escolhido umas das opções do modo do jogo, esta função é executada
export function Gamemode(mode, gameControl, selectors){
    switch(mode){
        // Se o jogador selecionou a opção "Um jogador", a tela da mesma será exibida
        case "singleplayer":
            // Ativa o modo singleplayer
            gameControl.singleplayer = true
            // Desativa o modo multiplayer
            gameControl.multiplayer = false
            // A tela de configs do singleplayer aparece
            selectors.optSingleplayer.style.display = "block"
            selectors.singleplayerInp.focus()
            break
        // Caso a opção "Multiplayer" seja a selecionada
        case "multiplayer":
            // Desativa o modo singleplayer
            gameControl.singleplayer = false
            // Ativa o modo multiplayer
            gameControl.multiplayer = true
            // O botão "Salvar" aparece
            selectors.saveBtn.style.display = "block"
            // A tela de configs do multiplayer aparece
            selectors.optMultiplayer.style.display = "block"
            // A tela onde insere quantos jogadores jogarão aparece
            selectors.quantityPlayers.style.display = "block"
            break
        // Se houve alguma excessão, a página é recarregada
        default:
            location.reload()
            break
    }

    // A tela de opções de modos do jogo some
    selectors.gamemodes.style.display = "none"

    // O botão para retornar à tela de opções de modos do jogo aparece
    selectors.returnBtn.style.display = "block"
}

export function ValidadeInput(playerInp, gameControl, selectors){
    // Verifica se o jogo está no modo "Singleplayer"
    if(gameControl.singleplayer){
        let playerSoloValue = playerInp.value

        if(playerSoloValue.length >= 3){
            // O botão "Iniciar" fica visível
            selectors.startBtn.style.display = "block"

            // O campo do nome do jogador fica na cor padrão
            playerInp.style.backgroundColor = "white"

            // A mensagem de alerta é apagada e desaparece
            selectors.alertMsg.textContent = null
            selectors.alertMsg.style.display = "none"
        } else{
            // A mensagem de alerta é apagada e desaparece
            selectors.alertMsg.textContent = null
            selectors.alertMsg.style.display = "none"

            // O botão "Iniciar" desaparece
            selectors.startBtn.style.display = "none"

            // O campo do nome do jogador fica na cor padrão
            playerInp.style.backgroundColor = "white"
        }
        // Condição que vai agir se o usuário inserir espaço em branco
        if(regexp.test(playerSoloValue)){
            // O campo "Usuário" muda de cor para vermelho
            playerInp.style.backgroundColor = "rgb(245, 76, 46)"

            // A mensagem de alerta é exibida na tela
            selectors.alertMsg.style.display = "block"
            selectors.alertMsg.textContent = "Não pode conter espaços em branco"

            // O botão "Iniciar" some
            selectors.startBtn.style.display = "none"
        }
    }

    // Verifica se o jogo está no modo "Multiplayer"
    if(gameControl.multiplayer){
        switch(gameControl.clickCount){
            case 1:
                let player1Value = playerInp.value

                // Verifica se o que o jogador digitou tem pelo menos 3 caracteres
                if(player1Value.length >= 3){
                    // O botão "Iniciar" fica visível
                    selectors.saveBtn.style.display = "block"

                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"

                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"
                } else{
                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"

                    // O botão "Iniciar" desaparece
                    selectors.saveBtn.style.display = "none" 

                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"
                }
                // Condição que vai agir se o usuário inserir espaço em branco
                if(regexp.test(player1Value)){
                    // O campo "Usuário" muda de cor para vermelho
                    playerInp.style.backgroundColor = "rgb(245, 76, 46)"

                    // A mensagem de alerta é exibida na tela
                    selectors.alertMsg.style.display = "block"
                    selectors.alertMsg.textContent = "Não pode conter espaços em branco"

                    // O botão "Iniciar" some
                    selectors.saveBtn.style.display = "none"
                }
                break;
    
            case 2:
                let player2Value = playerInp.value
                if(player2Value.length >= 3){
                    if(gameControl.totalplayers == 2){
                        // O botão "Iniciar" fica visível
                        selectors.startBtn.style.display = "block"
                    } else{
                        // O botão "Salvar" fica visível
                        selectors.saveBtn.style.display = "block"
                    }
                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"

                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"
                } else{
                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"

                    // O botão "Salvar" ou "Iniciar" desaparecem
                    selectors.saveBtn.style.display = "none"
                    selectors.startBtn.style.display = "none"

                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"
                }
                
                if(regexp.test(player2Value)){
                    // O campo "Usuário" muda de cor para vermelho
                    playerInp.style.backgroundColor = "rgb(245, 76, 46)"

                    // A mensagem de alerta é exibida na tela
                    selectors.alertMsg.style.display = "block"
                    selectors.alertMsg.textContent = "Não pode conter espaços em branco"

                    // O botão "Salvar" ou "Iniciar" desaparecem
                    selectors.saveBtn.style.display = "none"
                    selectors.startBtn.style.display = "none"
                }
                break;
    
            case 3:
                let player3Value = playerInp.value
                if(player3Value.length >= 3){
                    if(gameControl.totalplayers == 3){
                        // O botão "Iniciar" fica visível
                        selectors.startBtn.style.display = "block"
                    } else{
                        // O botão "Salvar" fica visível
                        selectors.saveBtn.style.display = "block"
                    }
                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"

                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"
                } else{
                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"

                    // O botão "Salvar" ou "Iniciar" desaparecem
                    selectors.saveBtn.style.display = "none"
                    selectors.startBtn.style.display = "none"

                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"
                }
                
                if(regexp.test(player3Value)){
                    // O campo "Usuário" muda de cor para vermelho
                    playerInp.style.backgroundColor = "rgb(245, 76, 46)"

                    // A mensagem de alerta é exibida na tela
                    selectors.alertMsg.style.display = "block"
                    selectors.alertMsg.textContent = "Não pode conter espaços em branco"

                    // O botão "Salvar" ou "Iniciar" desaparecem
                    selectors.saveBtn.style.display = "none"
                    selectors.startBtn.style.display = "none"
                }
                break;
    
            case 4:
                let player4Value = playerInp.value
                if(player4Value.length >= 3){
                    // O botão "Salvar" fica visível
                    selectors.startBtn.style.display = "block"
                    
                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"

                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"
                } else{
                    // A mensagem de alerta é apagada e desaparece
                    selectors.alertMsg.textContent = null
                    selectors.alertMsg.style.display = "none"

                    // O botão "Iniciar" desaparece
                    selectors.startBtn.style.display = "none"

                    // O campo do nome do jogador fica na cor padrão
                    playerInp.style.backgroundColor = "white"
                }
                
                if(regexp.test(player4Value)){
                    // O campo "Usuário" muda de cor para vermelho
                    playerInp.style.backgroundColor = "rgb(245, 76, 46)"

                    // A mensagem de alerta é exibida na tela
                    selectors.alertMsg.style.display = "block"
                    selectors.alertMsg.textContent = "Não pode conter espaços em branco"

                    // O botão "Iniciar" desaparece
                    selectors.startBtn.style.display = "none"
                }
                break;
        }
    }
}