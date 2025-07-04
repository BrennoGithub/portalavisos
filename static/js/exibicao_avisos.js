//funções responsaveis pela exibição dos avisos
const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
const exibicaoEventos = document.querySelector('.exibicaoEventos');

if (exibicaoAvisos) {
    let texto = exibicaoAvisos.textContent;
    if(texto === "Não há informativos."){
        exibicaoAvisos.innerHTML = texto;
    }
    texto = texto.replaceAll("''", '""');
    texto = texto.replaceAll("'", '"');
    const lista_avisos = JSON.parse(texto);
    let avisos = ``;
    for(const x of lista_avisos){
        avisos = `<div class="estilo_aviso">
                    <div class="estilo_dataAviso">${x['data']} ${x['hora']}</div>
                    <div class="estilo_assuntoAviso">${String(x['assunto'])}</div>
                    <div class="estilo_textoAviso">${String(x['texto'])}</div>
                 </div>`+avisos;
    };
    exibicaoAvisos.innerHTML = avisos;
};

if(exibicaoAvalicoes){
    let texto = exibicaoAvalicoes.textContent;
    if(texto === "Não há informativos."){
        exibicaoAvalicoes.innerHTML = texto;
    }
    texto = texto.replaceAll("''", '""');
    texto = texto.replaceAll("'", '"');
    const lista_avaliacoes = JSON.parse(texto);
    let avaliacoes = ``;
    for(const x of lista_avaliacoes){
        avaliacoes = `<div class="estilo_aviso">
                         <div class="estilo_dataAvaliacao">${x['data_avaliacao']} ${x['hora_avaliacao']}</div>
                         <div class="estilo_assuntoAvaliacao">${x['materia']} ${String(x['assunto'])}</div>
                         <div class="estilo_textoAvaliacao">${String(x['descricao'])}</div>
                      </div>`+avaliacoes;
    };
    exibicaoAvalicoes.innerHTML = avaliacoes;
};

if(exibicaoMateriais){
    let texto = exibicaoMateriais.textContent;
    if(texto === "Não há informativos."){
        exibicaoMateriais.innerHTML = texto;
    }
    texto = texto.replaceAll("''", '""');
    texto = texto.replaceAll("'", '"');
    const lista_materiais = JSON.parse(texto);
    let materiais = ``;
    for(const x of lista_materiais){
        materiais = `<div class="estilo_aviso">
                         <div class="estilo_dataMaterial">${x['materia']} ${x['assunto']}</div>
                         <div class="estilo_assuntoMaterial">${x['tipo_material']}  ${String(x['material'])}</div>
                         <div class="estilo_textoMaterial">${String(x['descricao'])}</div>
                      </div>`+materiais;
    };
    exibicaoMateriais.innerHTML = materiais;
};

if(exibicaoEventos){
    let texto = exibicaoEventos.textContent;
    if(texto === "Não há informativos."){
        exibicaoEventos.innerHTML = texto;
    }
    texto = texto.replaceAll("''", '""');
    texto = texto.replaceAll("'", '"');
    const lista_eventos = JSON.parse(texto);
    let eventos = ``;
    for(const x of lista_eventos){
        eventos = `<div class="estilo_aviso">
                         <div class="estilo_dataEvento">${x['data_evento']} ${x['hora_evento']}</div>
                         <div class="estilo_assuntoEvento">${String(x['nome'])}</div>
                         <div class="estilo_textoEvento">${String(x['descricao'])}</div>
                      </div>`+eventos;
    };
    exibicaoEventos.innerHTML = eventos;
}