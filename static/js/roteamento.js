import { renderizaInformativos } from "./renderizacaoInformativos.js";

const exibicaoMural = document.querySelector('.exibicaoMural')
const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
const exibicaoEventos = document.querySelector('.exibicaoEventos');
const paginas = document.querySelectorAll(".sessao");

//MELHORAR A FUNÇÃO DE ROTEAMENTO DAS PÁGINAS
document.addEventListener("DOMContentLoaded", async function(){
    await renderizaInformativos(exibicaoMural, "todos");
    await renderizaInformativos(exibicaoAvisos, "avisos");
    await renderizaInformativos(exibicaoAvalicoes, "avaliacoes");
    await renderizaInformativos(exibicaoMateriais, "materiais");
    await renderizaInformativos(exibicaoEventos, "eventos");

    /*for(const sessao in paginas){
        const tituloPagina = sessao.textContent;
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
    };*/
});