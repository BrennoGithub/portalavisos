import { renderizaInformativos } from "./renderizacaoInformativos.js";

const exibicaoMural = document.querySelector('.exibicaoMural')
const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
const exibicaoEventos = document.querySelector('.exibicaoEventos');
const paginas = document.querySelectorAll(".sessao");

//Função de roteamento
async function roteamento(tituloPagina){
    switch (tituloPagina){
        case "Mural":
                await renderizaInformativos(exibicaoMural, "todos");
                break;
            
        case "Avisos":
                await renderizaInformativos(exibicaoAvisos, "avisos");
                break;

        case "Avaliações":
                await renderizaInformativos(exibicaoAvalicoes, "avaliacoes");
                break;

        case "Materiais":
                await renderizaInformativos(exibicaoMateriais, "materiais");
                break;

        case "Eventos":
                await renderizaInformativos(exibicaoEventos, "eventos");
                break;
            
        default:
                await renderizaInformativos(exibicaoMural, "todos");
                break;
        };
}


//Função de redenrização
document.addEventListener("DOMContentLoaded", function(){
    roteamento();
});

paginas.addEventListener("click", function(){

})

for(const elemento in paginas){
    elemento.addEventListener("click", function(){
        const tituloPagina = elemento.textContent;
        alert(tituloPagina);
        roteamento(tituloPagina);
    });
}