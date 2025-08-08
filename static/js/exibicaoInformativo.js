import { renderizaInformativos } from "./renderizacaoInformativos.js";

const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
const exibicaoEventos = document.querySelector('.exibicaoEventos');

document.addEventListener("DOMContentLoaded", async function(){
    alert("ola mundo")
    await renderizaInformativos(exibicaoAvisos, "avisos" );
    await renderizaInformativos(exibicaoAvalicoes, "avaliacoes");
    await renderizaInformativos(exibicaoMateriais, "materiais");
    await renderizaInformativos(exibicaoEventos, "eventos");
});