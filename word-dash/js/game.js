let welcome = document.querySelector("#welcome")
let userName = localStorage.getItem("userName")     // Resgata o nome do usuário no localStorage
let chooseDiff = document.querySelector("#choose-diff")
let diff = document.querySelector("#difficulty")

// Este if é para caso o documento game.html for aberto sem ter acessado antes o login.html e preenchido o campo
if(userName == null || userName == undefined){
    location.href = "login.html"
}

// A mensagem "Escolha a dicifuldade do jogo" aparecerá lentamente
chooseDiff.style.display = "block"
chooseDiff.style.animation = "CarregarItem 2s ease-out"

// A lista de dificuldade também aparecerá lentamente
diff.style.display = "flex"
diff.style.animation = "CarregarItem 3s ease-out"

// Esta função irá misturar as letras do alfabeto e retornar um array delas
function LetterMixer(){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const mixedLetters = []
  
    for (let i = 0; i < 200; i++) {
        let randomString = ''

        for (let j = 0; j < 8; j++) {
            let randomIndex = Math.floor(Math.random() * letters.length)
            let randomLetter = letters.charAt(randomIndex)
            randomString += randomLetter
        }

        mixedLetters.push(randomString)
    }

    return mixedLetters
}

function GamePrepare(gameMode){
    let court = document.querySelector("#courtesy")
    let chooseDiff = document.querySelector("#choose-diff")
    let diff = document.querySelector("#difficulty")
    let easyLvl = document.querySelector("#easy")
    let normalLvl = document.querySelector("#normal")
    let hardLvl = document.querySelector("#hard")
    let specLvl = document.querySelector("#special")
    let gameWindow = document.querySelector("#game-window")
    let userName = localStorage.getItem("userName")     // Resgata o nome do usuário
    let showUser = document.querySelector("#show-user")
    let init = document.querySelector("#initiate")
    let wordDash = document.querySelector("#word-dash")
    let points = document.querySelector("#points")
    let timer = 0
    let words

    // Remove o evento de click para não executar essas funções várias vezes
    easyLvl.removeAttribute("onclick")
    normalLvl.removeAttribute("onclick")
    hardLvl.removeAttribute("onclick")
    specLvl.removeAttribute("onclick")

    // Atribui a classe "clicked" no CSS com algumas configurações visuais
    easyLvl.classList.add("clicked")
    normalLvl.classList.add("clicked")
    hardLvl.classList.add("clicked")
    specLvl.classList.add("clicked")

    switch(gameMode){
        // Caso o jogador tenha clicado na opção "Fácil", este bloco será executado
        case "easy":
            // As outras opções desaparecem
            normalLvl.style.animation = "EncolherItem 1s forwards"
            normalLvl.textContent = null
            hardLvl.style.animation = "EncolherItem 1s forwards"
            hardLvl.textContent = null
            specLvl.style.animation = "EncolherItem 1s forwards"
            specLvl.textContent = null
            // Um array de palavras é atribuido a variável "words"
            words = [
                "ACATAR","ACELERA","ALERTA","ALTOS","AMIGOS","ANULAR","APROVA","ATIVOS","BAIXOS","BANCO",
                "BEIJO","BRANCO","BRINCA","BRINCO","CAIXAS","CANTAR","CEGO","CHUVA","CIDADE","COBRA",
                "COLHER","COMIDA","COMPRAR","CONTA","CORRER","CRESCA","CURIOSO","CURTIR","DESEJO","DIZER",
                "DIZIMAR","DOENTE","DORMIR","ENTRAR","ESCOLA","ESPADA","ESPERA","EXEMPLO","FALAR","FALHA",
                "FAVOR","FELIZ","FESTAS","FOGO","GANHA","GARFO","GERAL","GRADE","GRANDE","HANGAR","HORA",
                "HONRA","HORTA","HUMANO","JANELA","JANTAR","JEITO","JOGOS","JUNTOS","LARGO","LEVE","LICOR",
                "LOCUTOR","LOUCO","LUZES","MELHOR","MENTIR","MOEDA","MUDAR","NADAR","NUVEM","OBRAS",
                "OFERTA","OLHAR","PAGAR","PASSA","PENSAR","PERDA","PESCA","PIADA","PODER","PRATA","QUEIMA",
                "QUANDO","REDE","ROUPAS","SALTO","SEDOSO","SORTE","TARDE","TROUXE","URGIR","URNA","USAR",
                "VENDA","VIDA","VIVER","VOLTA","ZEBRA","ZERO"
            ]
            // O timer do jogo terá 2.5 segundos
            timer = 2500
            break
        // Caso o jogador tenha clicado na opção "Normal", este bloco será executado
        case "normal":
            // As outras opções desaparecem
            easyLvl.style.animation = "EncolherItem 1s forwards"
            easyLvl.textContent = null
            hardLvl.style.animation = "EncolherItem 1s forwards"
            hardLvl.textContent = null
            specLvl.style.animation = "EncolherItem 1s forwards"
            specLvl.textContent = null
            // Um array de palavras é atribuido a variável "words"
            words = [
                "AEROPORTO","ACADEMIA","ACOLHEDOR","ANALISAR","ANATOMIA","APROVEITAR","ASSUSTADOR",
                "AUTOESTIMA","BENEVOLENTE","BICICLETA","BRILHANTE","BRINCADEIRA","CONVENCER","CLARAMENTE",
                "COMPLEMENTO","CRESCIMENTO","CURIOSIDADE","DESENVOLVER","DESPERTAR","DETERMINAR",
                "DOMINANTE","EFICIENTE","ELETRIZAR","ENCANTAR","ENTENDIMENTO","ESCANDALOSO","EXPERIENTE",
                "EXPERIMENTAR","FASCINANTE","FLORESTA","FRATERNIDADE","FORTALEZA","GARANTIA","GELADEIRA",
                "GENEROSIDADE","GLAMOUROSO","HABILIDOSO","HONESTIDADE","HORIZONTE","HOSPITAL","IMPORTANTE",
                "IMIGRANTE","INFLUENTE","INSISTIR","INSPIRADOR","INTELIGENTE","INTERESSANTE","IMPRESSIONAR",
                "JABUTICABA","JORNALISTA","JUSTIFICAR","JUVENTUDE","LEALDADE","LEGITIMAR","LIBERDADE",
                "LINGUAGEM","LUMINOSO","MAGNITUDE","MARAVILHOSO","METAMORFOSE","MELHORAR","MILAGROSO",
                "NARRADOR","NASCIMENTO","NOVEMBRO","NUTRIENTE","OBSERVAR","OPORTUNO","ORGANIZAR","OTIMISTA",
                "PREOCUPADO","PROCRASTINAR","PROCURAR","PROGRESSO","PROPRIEDADE","QUADRILHA","QUARENTENA",
                "QUESTIONAR","REALIZAR","RECONHECER","RELEVANTE","RESTAURANTE","SABEDORIA","SALVADOR",
                "SIMPLIFICAR","SINTONIA","SUBMETER","TELEFONE","TRADICIONAL","TRANQUILIZAR","TURBINADO",
                "ULTRAPASSAR","ULTRAVIOLETA","UNIFORTE","UNIVERSO","URBANIDADE","VALORIZAR","VANTAJOSO",
                "VITALIDADE","VIVIFICAR"
            ]
            // O timer do jogo terá 3 segundos
            timer = 3000
            break
        // Caso o jogador tenha clicado na opção "Difícil", este bloco será executado
        case "hard":
            // As outras opções desaparecem
            easyLvl.style.animation = "EncolherItem 1s forwards"
            easyLvl.textContent = null
            normalLvl.style.animation = "EncolherItem 1s forwards"
            normalLvl.textContent = null
            specLvl.style.animation = "EncolherItem 1s forwards"
            specLvl.textContent = null
            // Um array de palavras é atribuido a variável "words"
            words = [
                "ADMINISTRATIVO","AMBIENTALISTA","ANTICONSTITUCIONAL","ANTIMILITARISTA","ARTIFICIALMENTE",
                "AUTODIDATISMO","BIODIVERSIDADE","BIOELETRICIDADE","BIOLOGICAMENTE","CATASTROFISTAS",
                "CERTIFICADORES","COLECIONADORA","COLONIZADORES","COMPLEMENTARES","COMPREENDIDOS",
                "CONSEQUENCIAL","CONTEXTUALIZAR","CONTROVERSIAS","COOPERATIVISMO","CORRESPONDENTE",
                "CRIMINALIDADES","CRONOMETRISTA","DECIDIDAMENTE","DEMOCRATIZADO","DESENVOLVIMENTO",
                "DESTRUTURADAS","DIVERSIFICADOS","ELETRIFICADOR","EMPREENDEDORES","ENGENHEIRISMOS",
                "ESTABILIZADAS","ESTATISTICISTA","EVOLUCIONISMO","EXEMPLIFICADO","EXPERIMENTADOS",
                "EXTERIORIZADOS","EXTRACONSTITUCIONAL","FUNDAMENTANDO","GENERALIZADOS","HABILITACIONES",
                "HARMONIZADORES","HOSPITALIDADE","HUMANITARISMO","IDEALIZADORES","IDENTIFICADORES",
                "IMORTALIZADAS","IMPARCIALIDADE","IMPRESSIONANTE","IMPRESSIONISMOS","INCONSTITUCIONAL",
                "INSTITUCIONAIS","INTELIGIBILIDADE","INTERCONECTADOS","INTERDEPENDENTE","LEGITIMIDADES",
                "MAGNIFICAMENTE","MAJESTOSIDADE","MECANICAMENTE","METICULOSIDADE","METODOLOGICAMENTE",
                "MODERNIZADORAS","MONITORAMENTOS","MONOTONICIDADE","NACIONALIDADE","NATURALIDADES",
                "NECESSITAREMOS","NECESSITASSEM","NEOCONSERVADORES","OBJETIVIDADES","PECULIARIDADES",
                "PERFECCIONISMO","PERSEVERANTES","POSITIVAMENTE","PREDOMINANTEMENTE","PRESENTEAMENTE",
                "PROFISSIONALISMO","PROGRESSIVAMENTE","PROPAGANDISTA","PROTAGONISMOS","PROVAVELMENTE",
                "QUALIFICATIVO","RECONHECIMENTO","RECUPERADORAS","REDUZIDAMENTE","REESTRUTURADOS",
                "REFLEXIVAMENTE","REGIONALISMOS","RESPONSABILIDADE","SATISFAZEDORAS","SISTEMATICAMENTE",
                "SOLIDARIEDADE","SUSTENTABILIDADE","TENDENCIOSAMENTE","TRANSPARENTEMENTE","TRASCENDENTES",
                "TRANSPORTADOR","UNIVERSALIDADES","UTILIZABILIDADE","VANTAJOSAMENTE","VULNERABILIDADE"
            ]
            // O timer do jogo terá 4 segundos
            timer = 4000
            break
        // Caso o jogador tenha clicado na opção "Especial", este bloco será executado
        case "special":
            // As outras opções desaparecem
            easyLvl.style.animation = "EncolherItem 1s forwards"
            easyLvl.textContent = null
            normalLvl.style.animation = "EncolherItem 1s forwards"
            normalLvl.textContent = null
            hardLvl.style.animation = "EncolherItem 1s forwards"
            hardLvl.textContent = null
            // Um array de palavras feito por uma função é atribuido a variável "words"
            words = LetterMixer()
            // O timer do jogo terá 4.5 segundos
            timer = 4500
    }
    
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
            // A tela do jogo é revelada
            gameWindow.style.display = "flex"
            // O botão "Começar" aparece
            init.style.animation = "CarregarItem 1s forwards"
            // O nome do usuário já é aplicado no placar quando ele carregar
            showUser.innerHTML = `| ${userName}&nbsp;`

            // Ao clicar no botão "Começar" será disparado esses comandos:
            init.addEventListener("click", function FinalPrepare(){
                // O botão e o texto dele somem
                init.textContent = null
                init.style.animation = "AchatarItem 500ms ease-out forwards"
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
                    // Executa o jogo levando como parâmetro as palavras e o timer da dificuldade
                    Game(words, timer)
                }, 1000)
                // Remove o ouvinte de clique para garantir que esta função seja executada apenas uma vez
                init.removeEventListener("click", FinalPrepare)
            })
        }, 3000)
    }, 1000)
}

function Game(words, timer){
    let wordReq = document.querySelector("#word-required")
    let inpWord = document.querySelector("#input-word")
    let currentScore = document.querySelector("#score")
    let currentMistks = document.querySelector("#mistakes")
    let imgButton = document.querySelector("#img-pause-play")
    let butPause = document.querySelector("#pause-play")
    let intervalID   
    let index = 0, score = 0, count = 0, mistks = 0
    let WordDash = () => {
        // O input onde as palavras serão digitadas ficará desativado até que o jogo inicie
        inpWord.disabled = true

        // Contagem regressiva para começar o jogo
        setTimeout(function(){wordReq.innerHTML = "3"})
        setTimeout(function(){wordReq.innerHTML = "2"}, 1000)
        setTimeout(function(){wordReq.innerHTML = "1"}, 2000)
        setTimeout(function(){wordReq.innerHTML = "GO"}, 3000)

        // Função setTimeOut que vai executar o setInterval assim que o tempo da contagem terminar
        setTimeout(function(){
            intervalID = setInterval(function(){
                // Botão de pausar aparece
                butPause.style.display = "inline-block"
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
                index = Math.floor(Math.random() * words.length)
                wordReq.textContent = words[index]
                // O pontos de erros recebe quantas vezes este ciclo repetiu subtraindo com os pontos de acerto
                mistks = count - score
                // A pontuação de erros é aplicado ao placar
                currentMistks.innerHTML = `| Erros: ${mistks}|`
                // O contador do ciclo é incrementado
                count++
            }, timer)
        }, 2000)
    }

    // Executa o jogo
    WordDash()

    // Função que será executada quando o botão de pausa for clicado
    butPause.addEventListener("click", function(){
        if(imgButton.src.includes("img/pause.png")){
            imgButton.src = "img/play.png"
            imgButton.alt = "Continuar"
            inpWord.value = ""
            inpWord.disabled = true
            inpWord.style.backgroundColor = "rgba(255, 255, 255, 0.322)"
            inpWord.style.color = "#757575"
            clearInterval(intervalID)
        } else if(imgButton.src.includes("img/play.png")){
            imgButton.src = "img/pause.png"
            imgButton.alt = "Pausar"
            butPause.style.display = "none"
            count--
            WordDash()
        }
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
            // A pontuação de acertos é incrementada
            score++
            // A pontuação de acertos é aplicada ao placar
            currentScore.innerHTML = `| Acertos: ${score}`
        }
    })
}