let userName = document.querySelector("#user")
let botaoIniciar = document.querySelector("#botao-iniciar")
let janelaLogin = document.querySelector("#janela-login")
let msgAlerta = document.querySelector("#mensagem-alerta")
let titulo = document.querySelector("#titulo")

// Vai manter o cursor no campo "Usuário" quando a página carregar
userName.focus()

// Função que vai deixar tudo o que for digitado no campo "Usuário" em letras maiúsculas
userName.addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

// Função setInterval que verifica a todo momento se o que foi digitado no campo "Usuário" está dentro das condições
setInterval(function(){
    // Se o que foi digitado no campo "Usuário" atender as condições abaixo, então ele mexe em algumas configurações:
    if(userName.value.length >= 1 && userName.value.length <= 15){
        // O tamanho da janela aumenta para caber o botão "Iniciar"
        janelaLogin.style.height = "170px" 
        // O botão "Iniciar" aparece lentamente
        botaoIniciar.style.animation = "CarregarItens 500ms ease-out"    
        // O campo "Usuário" fica na cor padrão
        userName.style.backgroundColor = "white"
        // O botão fica visível
        botaoIniciar.style.display = "block"    
        // A mensagem que é disparada quando o usuário digita mais de 15 caracteres ou coloca espaços em branco é apagada
        msgAlerta.textContent = null    
    }

    // Se o usuário digitar mais de 15 caracteres no campo, os seguintes comandos serão executados:
    else if(userName.value.length > 15){
        // O tamanho da janela aumenta para caber a mensagem de alerta
        janelaLogin.style.height = "135px"
        // O botão "Iniciar" some
        botaoIniciar.style.display = "none"
        // O campo "Usuário" muda de cor para vermelho
        userName.style.backgroundColor = "rgb(245, 76, 46)"
        // A mensagem de alerta é exibida
        msgAlerta.textContent = "O nome de usuário não pode ultrapassar 15 caracteres."
    }

    // Se nenhuma das condições acima for atendida, esta será executada
    else{
        // A mensagem que é disparada quando o usuário digita mais de 15 caracteres ou coloca espaços em branco é apagada
        msgAlerta.textContent = null 
        // O botão desaparece
        botaoIniciar.style.display = "none" 
        // O campo "Usuário" fica na cor padrão
        userName.style.backgroundColor = "white"
        // A janela vai diminuir porque o botão sumiu
        janelaLogin.style.height = "120px"  
    }

    // Se o que o usuário digitou contiver espaços em branco, serão lançados esses comandos:
    if(userName.value.includes(" ")){
        // A janela vai aumentar um pouco de tamanho para caber a mensagem de alerta
        janelaLogin.style.height = "135px"
        // O campo "Usuário" muda de cor para vermelho
        userName.style.backgroundColor = "rgb(245, 76, 46)"
        // A mensagem de alerta é exibida na tela
        msgAlerta.textContent = "O nome de usuário não pode conter espaços em brancos"
        // O botão "Iniciar" some
        botaoIniciar.style.display = "none"
    } 
})

// Essa função acontece quando o usuário clicar no botão "Iniciar"
function Iniciar(){
    // Se de alguma maneira o usuário conseguir driblar todas as condições da função aneterior, acontecerá isso:
    if(userName.value.length == 0 || userName.value.includes(" ") || userName.value.length > 15){
        // Uma caixa de alerta será disparada
        alert("Nome de usuário inválido. Não pode ficar em branco, conter espaços e ultrapassar o limite de caracteres.")
        // A página é recarregada
        location.reload()
    }
    // A janela vai ser movida para baixo
    janelaLogin.style.animation += "MoverMenu 2.5s"
    // O título do jogo será movido para cima
    titulo.style.animation += "MoverTitulo 2.5s"
    // Função que redirecionará para outra parte da página
    setTimeout(function(){window.location.href = "game.html"}, 2000)
    // O campo "Usuário" ficará vazio se desejar voltar para a página anterior
    userName.value = null
}