/* 
    Objetivo - Ao clicarmos no botão temos que mostrar a imagem de fundo correspondente

    Passo 1 - Pegar o elemento html dos botões
    Passo 2 - Identificar o clique do usuário no botão
    Passo 3 - Desmarcar o botão anterior
    Passo 4 - Marcar o botão clicado
    Passo 5 - Esconder a imagem de fundo antiga
    Passo 6 - Fazer aparecer a imagem correspondente ao botão clicado
*/
//Passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Pàsso 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3
        desativarBotaoSelecionado();

        //Passo 4
        botao.classList.add('selecionado');

        //Passo 5
        esconderImagemAtiva();

        //Passo 6
        imagens[indice].classList.add('ativa');
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

