import { renderizaInformativos } from "./renderizacaoInformativos.js";
import { formularios } from "./form_informativos.js";

const exibicaoInformativos = document.querySelector('.exibicaoInformativos')

//Função de roteamento
async function roteamento(tituloPagina){
    switch (tituloPagina){
        case "Mural":
                await renderizaInformativos(exibicaoInformativos, "todos");
                break;
            
        case "Avisos":
                await renderizaInformativos(exibicaoInformativos, "avisos");
                break;

        case "Avaliações":
                await renderizaInformativos(exibicaoInformativos, "avaliacoes");
                break;

        case "Material Didatico":
                await renderizaInformativos(exibicaoInformativos, "materiais");
                break;

        case "Eventos":
                await renderizaInformativos(exibicaoInformativos, "eventos");
                break;
            
        default:
                await renderizaInformativos(exibicaoInformativos, "todos");
                break;
        };
}

//Função de redenrização ao carregar a página
document.addEventListener("DOMContentLoaded", function(){
    roteamento();
});

//Função de roteamento
const paginas = document.querySelectorAll(".sessao");
paginas.forEach(elemento => {
        elemento.addEventListener("click", function(event){
        event.preventDefault() //<-- Impede que qunado clica em <a> recarregue a página
        const tituloPagina = elemento.textContent;
        roteamento(tituloPagina);
    });
})

//Exibição de formularios
const opcoesInformativos = document.querySelectorAll(".opcaoInformativo");
opcoesInformativos.forEach( opcao => {
opcao.addEventListener("click", function(event){
    event.preventDefault()
    const tipoInformativo = opcao.textContent;
    formularios(exibicaoInformativos, tipoInformativo);
    })
})
