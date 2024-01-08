let userField = document.querySelector("#user-field")
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
    if(userField.value.length >= 3){
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

    // Se o nome do usuário conter
    if(/\s/.test(userField.value)){
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
    localStorage.setItem('userName', userField.value)

    // A janela vai ser movida para baixo
    loginWindow.style.animation += "MoverMenu 2.5s"
    // O título do jogo será movido para cima
    tittle.style.animation += "MoverTitulo 2.5s"

    // Função que redirecionará para outra parte da página
    setTimeout(function(){location.href = "game.html"}, 2000)

    // Apaga o que foi digitado no campo "Usuário" 
    userField.value = null
}