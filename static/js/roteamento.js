import { renderizaInformativos } from "./renderizacaoInformativos.js";
import { formularios, assuntoInformativo, exibicaoOpcoes, dadosForm} from "./form_informativos.js";
import { POST } from "./requisicaoHTTP.js";

const exibicaoInformativos = document.querySelector('.exibicaoInformativos');

//Função de roteamento
async function roteamento(tituloPagina){
    switch (tituloPagina){
        case "Mural":
                await renderizaInformativos(exibicaoInformativos, "");
                break;
            
        case "Avisos":
                await renderizaInformativos(exibicaoInformativos, "/avisos");
                break;

        case "Avaliações":
                await renderizaInformativos(exibicaoInformativos, "/avaliacoes");
                break;

        case "Material Didatico":
                await renderizaInformativos(exibicaoInformativos, "/materiais");
                break;

        case "Eventos":
                await renderizaInformativos(exibicaoInformativos, "/eventos");
                break;
            
        default:
                await renderizaInformativos(exibicaoInformativos, "");
                break;
        };
}

//Função de redenrização ao carregar a página
document.addEventListener("DOMContentLoaded", function(){ roteamento(); });

//Função de roteamento
const paginas = document.querySelectorAll(".sessao");
paginas[0].style.backgroundColor = "lightgray";
paginas.forEach(elemento => {
    elemento.addEventListener("click", function(event){
        event.preventDefault() //<-- Impede que qunado clica em <a> recarregue a página

        paginas.forEach(outrosEle => {
            outrosEle.style.backgroundColor = "white";
        })

        elemento.style.backgroundColor = "lightgray";

        const tituloPagina = elemento.querySelector(".textoSessao").textContent;
        roteamento(tituloPagina);

        //Condicional que faz a barra lateral fechar depois do click
        const larguraJanela = window.innerWidth;
        if(larguraJanela < 1000){
            document.getElementById("mySidebar").style.width = "0";
        }
    });
})

//Função de gerenciamento de formularios
function gerenciamentoForm(){
    formularios(exibicaoInformativos);
    const assuntoArea = document.getElementById("assunto");
    const areaOpcoes = document.querySelector(".areaOpcoes");
    exibicaoOpcoes(assuntoArea, areaOpcoes, "click", "flex");

    const dadosAdicionais = document.querySelector(".dadosAdicionais");
    const opcoesInformativos = document.querySelectorAll(".opcaoInformativo")
    opcoesInformativos.forEach(opcao => {
        const assunto = opcao.textContent;
        opcao.addEventListener("click", function(){
            assuntoInformativo(dadosAdicionais, assunto);
            assuntoArea.value = assunto;
            areaOpcoes.style.display = "none";
        });
    });

    assuntoArea.addEventListener("change", function(){
        assuntoInformativo(dadosAdicionais, assuntoArea.value);
        switch (areaOpcoes.style.display){
            case "flex":
                areaOpcoes.style.display = "none";
                break;
            default:
                areaOpcoes.style.display = "none";
                break;
        }
    });

    document.querySelector(".formAviso").addEventListener("submit", function(event){
        event.preventDefault(); //Prevene o comportamento padrão do evento de submit para que a requisição seja feita apenas pelo seu JavaScript, e não pelo formulário.
        const assunto = document.getElementById("assunto").value;
        const dados = dadosForm(assunto);
        POST("/submit_informativo", dados);
        window.location.reload(); //Recarrega a página
    })
};

//Exibição de formularios
const botaoCriar = document.querySelector(".icon_cria");
botaoCriar.addEventListener("click", gerenciamentoForm);
