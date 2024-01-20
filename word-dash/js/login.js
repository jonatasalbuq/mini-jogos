let menuCard = document.querySelector("#menu-card")
let gamemodes = document.querySelector("#gamemodes")
let optSingleplayer = document.querySelector("#opt-singleplayer")
let optMultiplayer = document.querySelector("#opt-multiplayer")
let returnBtn = document.querySelector("#return-btn")
let playersName = document.querySelectorAll(".playername")
let alertMsg = document.querySelector("#alert-msg")
let startBtn = document.querySelector("#start-btn")


// let userField = document.querySelector("#user-field")
// let tittle = document.querySelector("h1")

// Caso o jogador tenha escolhido umas das opções do modo do jogo, esta função é executada
function Gamemode(mode){
    // Se o jogador selecionou a opção "Um jogador", a tela da mesma será exibida
    if(mode == "singleplayer") optSingleplayer.style.display = "block"
    
    // Se o jogador selecionou a opção "Multiplayer", a tela da mesma será exibida
    if(mode == "multiplayer") optMultiplayer.style.display = "block"

    // A tela de opções de modos do jogo some
    gamemodes.style.display = "none"
    // O botão para retornar à tela de opções de modos do jogo aparece
    returnBtn.style.display = "block"
    // Ativa o cursor imediatamente no campo (selecionado item 0 temporariamente)
    playersName[0].focus()
}

// Caso o jogador aperte o botão de voltar, esta função é executada
function Return(){
    // A opção de modo do jogo escolhida desaparece
    optSingleplayer.style.display = "none"
    optMultiplayer.style.display = "none"
    // A tela de opções de modos do jogo aparece
    gamemodes.style.display = "flex"
    // O botão de voltar desaparece
    returnBtn.style.display = "none"
    // O array "playersName" é iterado e, em cada item, é apagado o que havia sido digitado nos nomes dos jogadores
    playersName.forEach(playerName => playerName.value = "")
    // O botão "Iniciar" desaparece
    startBtn.style.display = "none"
    // A janela terá sua altura ajustada de modo automático
    menuCard.style.height = "auto"
}

// Função "for" que vai adicionar, em cada campo de nome do jogador, um ouvinte de evento de digitação 
for(const playerName of playersName){
    playerName.addEventListener("input", () => {
        if(playerName.value.length >= 3){
            // O botão "Iniciar" fica totalmente visível
            startBtn.style.display = "block"
            // O campo do nome do jogador fica na cor padrão
            playerName.style.backgroundColor = "white"
            // A mensagem de alerta é apagada e desaparece
            alertMsg.textContent = null
            alertMsg.style.display = "none"
        } else{
            // A mensagem de alerta é apagada e desaparece
            alertMsg.textContent = null
            alertMsg.style.display = "none"
            // O botão "Iniciar" desaparece
            startBtn.style.display = "none" 
            // O campo do nome do jogador fica na cor padrão
            playerName.style.backgroundColor = "white"
            // A janela vai diminuir porque o botão sumiu
            menuCard.style.height = "auto"  
        }

        // Condição que vai agir se o usuário inserir espaço em branco
        if(/\s/.test(playerName.value)){
            // O campo "Usuário" muda de cor para vermelho
            playerName.style.backgroundColor = "rgb(245, 76, 46)"
            // A mensagem de alerta é exibida na tela
            alertMsg.style.display = "block"
            alertMsg.textContent = "Não pode conter espaços em branco"
            // O botão "Iniciar" some
            startBtn.style.display = "none"
        }
    })
}

// Caso o jogador clique no botão "Iniciar", esta função é executada
function Start(){
    // Se de alguma maneira o jogador conseguir driblar todas as condições da função anterior
    if(userField.value.length == 0 || userField.value.includes(" ") || userField.value.length > 15){
        // Uma caixa de alerta será disparada
        alert("Nome inválido. Não pode ficar em branco, conter espaços ou ultrapassar o limite de caracteres.")
        // A página é recarregada
        location.reload()
    }
    // Armazena o nome do usuário no localStorage
    localStorage.setItem('userName', userField.value)

    // A janela vai ser movida para baixo
    menuCard.style.animation += "MoverMenu 2.5s"
    // O título do jogo será movido para cima
    tittle.style.animation += "MoverTitulo 2.5s"

    // Função que redirecionará para outra parte da página
    setTimeout(function(){location.href = "game.html"}, 2000)

    // Apaga o que foi digitado no campo "Usuário" 
    userField.value = null
}