// =============== Início do documento login.html ===============

let userField = document.querySelector("#user-field")
let userName = userField
let startButton = document.querySelector("#start-button")
let loginWindow = document.querySelector("#login-window")
let msgAlerta = document.querySelector("#alert-message")
let tittle = document.querySelector("#tittle")

// Vai manter o cursor no campo "Usuário" quando a página carregar
userField.focus()

// Função que verifica a cada digito se o que foi digitado no campo "Usuário" está dentro das condições
userField.addEventListener("input", function(){
    // Função que vai deixar tudo o que for digitado no campo "Usuário" em letras maiúsculas
    this.value = this.value.toUpperCase()

    // Se o que foi digitado no campo "Usuário" atender as condições abaixo, então ele mexe em algumas configurações:
    if(userField.value.length >= 1 && userField.value.length <= 15){
        // O tamanho da janela aumenta para caber o botão "Iniciar"
        loginWindow.style.height = "170px" 
        // O botão "Iniciar" aparece lentamente
        startButton.style.animation = "CarregarItem 500ms ease-out"    
        // O campo "Usuário" fica na cor padrão
        userField.style.backgroundColor = "white"
        // O botão fica visível
        startButton.style.display = "block"    
        // A mensagem que é disparada quando o usuário digita mais de 15 caracteres ou coloca espaços em branco é apagada
        msgAlerta.textContent = null    
    }

    // Se o usuário digitar mais de 15 caracteres no campo, os seguintes comandos serão executados:
    else if(userField.value.length > 15){
        // O tamanho da janela aumenta para caber a mensagem de alerta
        loginWindow.style.height = "135px"
        // O botão "Iniciar" some
        startButton.style.display = "none"
        // O campo "Usuário" muda de cor para vermelho
        userField.style.backgroundColor = "rgb(245, 76, 46)"
        // A mensagem de alerta é exibida
        msgAlerta.textContent = "O nome de usuário não pode ultrapassar 15 caracteres."
    }

    // Se nenhuma das condições acima for atendida, ou seja, não tiver nada digitado, esta será executada
    else{
        // A mensagem que é disparada quando o usuário digita mais de 15 caracteres ou coloca espaços em branco é apagada
        msgAlerta.textContent = null 
        // O botão desaparece
        startButton.style.display = "none" 
        // O campo "Usuário" fica na cor padrão
        userField.style.backgroundColor = "white"
        // A janela vai diminuir porque o botão sumiu
        loginWindow.style.height = "120px"  
    }

    // Se o que o usuário digitou contiver espaços em branco, serão lançados esses comandos:
    if(userField.value.includes(" ")){
        // A janela vai aumentar um pouco de tamanho para caber a mensagem de alerta
        loginWindow.style.height = "135px"
        // O campo "Usuário" muda de cor para vermelho
        userField.style.backgroundColor = "rgb(245, 76, 46)"
        // A mensagem de alerta é exibida na tela
        msgAlerta.textContent = "O nome de usuário não pode conter espaços em brancos"
        // O botão "Iniciar" some
        startButton.style.display = "none"
    }
})

// Essa função acontece quando o usuário clicar no botão "Iniciar"
function Start(){
    // Se de alguma maneira o usuário conseguir driblar todas as condições da função aneterior, acontecerá isso:
    if(userField.value.length == 0 || userField.value.includes(" ") || userField.value.length > 15){
        // Uma caixa de alerta será disparada
        alert("Nome de usuário inválido. Não pode ficar em branco, conter espaços e ultrapassar o limite de caracteres.")
        // A página é recarregada
        location.reload()
    }
    // Armazena o nome do usuário no localStorage
    localStorage.setItem('userName', userName.value)

    // A janela vai ser movida para baixo
    loginWindow.style.animation += "MoverMenu 2.5s"
    // O título do jogo será movido para cima
    tittle.style.animation += "MoverTitulo 2.5s"

    // Função que redirecionará para outra parte da página
    setTimeout(function(){location.href = "game.html"}, 2000)

    // Apaga o que foi digitado no campo "Usuário" 
    userField.value = null
}

// =============== Início do documento game.html ===============

// Executada pelo evento "onload" no <body> de game.html
function ExecuteGame(){
    let welcome = document.querySelector("#welcome")
    let userName = localStorage.getItem("userName")     // Resgata o nome do usuário no localStorage
    let chooseDiff = document.querySelector("#choose-diff")
    let diff = document.querySelector("#difficulty")

    // Este if é para caso o documento game.html for aberto sem ter acessado antes o login.html e preenchido o campo
    if(userName == null || userName == undefined){
        location.href = "login.html"
    }

    // Mensagem de boas vindas
    welcome.innerHTML = `BEM-VINDO(A), ${userName}`

    // Função setTimeOut que vai organizar o tempo de execução das seguintes coisas:
    setTimeout(function(){
        // A mensagem de boas vindas vai desaparecer lentamente
        welcome.style.animation = "AnimacaoTexto 25s infinite ease-in-out, DescarregarItem 3s ease-out forwards"
        // Outra função setTimeOut que vai fazer o parágrafo de boas vindas sumir de vez do documento em 3 segundos
        setTimeout(function(){welcome.style.display = "none"}, 3000)
        // Mais uma função de setTimeOut que fará as seguintes coisas:
        setTimeout(function(){
            // A mensagem "Escolha a dicifuldade do jogo" aparecerá lentamente
            chooseDiff.style.display = "block"
            chooseDiff.style.animation = "CarregarItem 2s ease-out"

            // A lista de dificuldade também aparecerá lentamente
            diff.style.display = "flex"
            diff.style.animation = "CarregarItem 3s ease-out"
        }, 3000)
    }, 5000)
}

function Normal(){
    let court = document.querySelector("#courtesy")
    let chooseDiff = document.querySelector("#choose-diff")
    let diff = document.querySelector("#difficulty")
    let easyLvl = document.querySelector("#easy")
    let normalLvl = document.querySelector("#normal")
    let hardLvl = document.querySelector("#hard")
    let specLvl = document.querySelector("#special")
    
    // Remove o evento de click para não executar esta função várias vezes
    normalLvl.removeAttribute("onclick")
    // Atribui a classe "clicked" no CSS com algumas configurações visuais
    normalLvl.classList.add("clicked")
    

    // Isto vai fazer com que as outras opções de dificuldade do jogo sumam com animação
    easyLvl.style.animation = "EncolherItem 1s forwards"
    easyLvl.textContent = null
    hardLvl.style.animation = "EncolherItem 1s forwards"
    hardLvl.textContent = null
    specLvl.style.animation = "EncolherItem 1s forwards"
    specLvl.textContent = null
    
    // 1 segundo após os itens acima sumirem, serão executados esses comandos:
    setTimeout(function(){
        // O parágrafo com o texto "Escolha a dificuldade" desaparece
        chooseDiff.style.opacity = "0"
        // A lista de dificuldade desaparece
        diff.style.opacity = "0"
        // Em 1.5 segundos a tela de cortesia some
        setTimeout(function(){court.style.opacity = "0"}, 1500)
        // Em 3 segundos este comandos são lançados
        setTimeout(function(){
            // O display da tela de cortesia some
            court.style.display = "none"
            // A função que executa o modo normal do jogo é chamada
            StartNormalMode()
        }, 3000)
    }, 1000)
}

function StartNormalMode(){
    let gameWindow = document.querySelector("#game-window")
    let userName = localStorage.getItem("userName")     // Resgata novamente o nome do usuário
    let showUser = document.querySelector("#show-user")
    let wordReq = document.querySelector("#word-required")
    let inpWord = document.querySelector("#input-word")
    let init = document.querySelector("#initiate")
    let wordDash = document.querySelector("#word-dash")
    let points = document.querySelector("#points")
    let currentScore = document.querySelector("#score")
    let currentMistks = document.querySelector("#mistakes")
    let index = 0, score = 0, count = 0, mistks = 0
    const words = [
        "AEROPORTO","ACADEMIA","ACOLHEDOR","ANALISAR","ANATOMIA","APROVEITAR","ASSUSTADOR",
        "AUTOESTIMA","BRINCADEIRA","CONVENCER","DESENVOLVER","DESPERTAR","DETERMINAR",
        "DOMINANTE","DOMINGO","EFICIENTE","ELETRIZAR","ENCANTAR","ENTENDIMENTO","ESCANDALOSO",
        "EXEMPLO","EXPERIENTE","EXPERIMENTAR","FASCINANTE","FLORESTA","GELADEIRA","HOSPITAL",
        "IMPORTANTE","IMIGRANTE","INFLUENTE","INSISTIR","INSPIRADOR","INTELIGENTE",
        "INTERESSANTE","IMPRESSIONAR","MARAVILHOSO","NOVEMBRO","OBSERVAR","OTIMISTA",
        "PREOCUPADO","PROCRASTINAR","PROCURAR","PROGRESSO","PROPRIEDADE","QUESTIONAR",
        "REALIZAR","RECONHECER","RELEVANTE","RESTAURANTE","SUBMETER","TRADICIONAL","TELEFONE",
        "TRANQUILIZAR","UNIVERSO","VANTAJOSO"
    ]

    // A tela do jogo é revelada
    gameWindow.style.display = "flex"
    // O botão "Começar" aparece
    init.style.animation = "CarregarItem 1s forwards"
    // O nome do usuário já é aplicado no placar quando ele carregar
    showUser.innerHTML = `| ${userName}&nbsp;`
    // Sugestão de palavras no input fica desativado
    inpWord.autocomplete = 'off'

    // Ao clicar no botão "Começar" será disparado esses comandos:
    init.addEventListener("click", function(){
        // O botão e o texto dele somem
        init.textContent = null
        init.style.animation = "AchatarItem 1s ease-out forwards"

        // 1 segundo depois do clique este bloco é executado
        setTimeout(function(){
            // O botão "Começar" some
            init.style.display = "none"
            // O placar de pontos aparece em conjunto com uma animação
            points.style.display = "flex"
            points.style.animation = "ExpandirPontos 500ms forwards"
            // O conteiner "word-dash" aparece com uma animação
            wordDash.style.display = "flex"
            wordDash.style.animation = "CarregarItem 1s forwards"

            // Contagem regressiva para começar de fato o jogo
            setTimeout(function(){wordReq.innerHTML = "2"}, 2000)
            setTimeout(function(){wordReq.innerHTML = "1"}, 3000)
            setTimeout(function(){wordReq.innerHTML = "GO"}, 4000)

            // Função setTimeOut que vai executar o setInterval assim que o tempo da contagem terminar
            setTimeout(function(){
                setInterval(function(){
                    // O input é liberado para digitar
                    inpWord.disabled = false
                    // O cursor fica focado no input
                    inpWord.focus()
                    // O input volta a ficar com as cores padrão
                    inpWord.style.backgroundColor = "white"
                    inpWord.style.color = "black"
                    // O texto que havia sido digitado no input é apagado
                    inpWord.value = ""
                    // Função para sortear a palavra requisitada
                    index = Math.floor(Math.random() * words.length);
                    wordReq.textContent = words[index]
                    // O pontos de erros recebe quantas vezes este ciclo repetiu subtraindo com os pontos de acerto
                    mistks = count - score
                    // Os pontos de acertos e erros são aplicados ao placar
                    currentScore.innerHTML = `| Acertos: ${score}`
                    currentMistks.innerHTML = `| Erros: ${mistks}|`
                    // O contador do ciclo é incrementado
                    count++
                }, 3000)
            }, 3000)
        }, 1000)
    })

    inpWord.addEventListener("input", function(){
        // O texto digitado fica com letras maiúculas
        this.value = this.value.toUpperCase()
        // Se o que foi digitado for igual à palavra exigida, então...
        if(inpWord.value == wordReq.textContent){
            // Muda a cor do input para verde para afirmar que está correto o texto
            inpWord.style.backgroundColor = "#67C301"
            // Muda a cor das letras para cor branca
            inpWord.style.color = "white"
            // O input é bloqueado após digitar a palavra corretamente
            inpWord.disabled = true
            // A pontuação é incrementada
            score++
        }
    })
}