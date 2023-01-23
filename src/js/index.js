const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

/* Objetivo número 1 - quando o usuário clicar no botão de veja trailer, devemos abrir a modal com o vídeo do trailer
*/

//- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS

//- passo 2 - dar um jeito de identificar quando o usuário clicar no botão 
botaoTrailer.addEventListener("click", () => {
    //- passo 4 - abrir o modal na tela
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo);
});

//- passo 3 - dar um jeito de pegar o elemento da modal no JS


//Objetivo 2 - quando o usuário clicar no X devemos fechar a modal
//- passo 1 - dar um jeito de pegar o elemento de fechar modal usado o js


//- passo 2 - dar um jeito de identificar quandao o usuário clicar no X

botaoFecharModal.addEventListener("click", () => {
    //- passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})

