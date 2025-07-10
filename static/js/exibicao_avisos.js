//funções responsaveis pela exibição dos avisos
const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
const exibicaoEventos = document.querySelector('.exibicaoEventos');

if (exibicaoAvisos) {
    let texto = exibicaoAvisos.textContent;
    if(texto === "Não há informativos desse tipo registrado."){
        exibicaoAvisos.innerHTML = `<p><em>${texto}</em></p>`;
    }else{
        texto = texto.replaceAll("''", '""');
        texto = texto.replaceAll("'", '"');
        const lista_avisos = JSON.parse(texto);
        let avisos = ``;
        for(const x of lista_avisos){
            avisos = `<div class="estilo_aviso">
                    <div class="primeira_area  azul_1">${x['data']} ${x['hora']}</div>
                    <div class="segunda_area  azul_2">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_3">${String(x['texto'])}</div>
                 </div>`+avisos;
        };
        exibicaoAvisos.innerHTML = avisos;
    }
    
};

if(exibicaoAvalicoes){
    let texto = exibicaoAvalicoes.textContent;
    if(texto === "Não há informativos desse tipo registrado."){
        exibicaoAvalicoes.innerHTML = `<p><em>${texto}</em></p>`;
    }else{
        texto = texto.replaceAll("''", '""');
        texto = texto.replaceAll("'", '"');
        const lista_avaliacoes = JSON.parse(texto);
        let avaliacoes = ``;
        for(const x of lista_avaliacoes){
            avaliacoes = `<div class="estilo_aviso">
                         <div class="primeira_area verde_1">${x['data_avaliacao']} ${x['hora_avaliacao']}</div>
                         <div class="segunda_area  verde_2">${x['materia']} ${String(x['assunto'])}</div>
                         <div class="terceira_area  verde_3">${String(x['descricao'])}</div>
                      </div>`+avaliacoes;
    };
        exibicaoAvalicoes.innerHTML = avaliacoes;
    }
    
};

if(exibicaoMateriais){
    let texto = exibicaoMateriais.textContent;
    if(texto === "Não há informativos desse tipo registrado."){
        exibicaoMateriais.innerHTML = `<p><em>${texto}</em></p>`;
    }else{
        texto = texto.replaceAll("''", '""');
        texto = texto.replaceAll("'", '"');
        const lista_materiais = JSON.parse(texto);
        let materiais = ``;
        for(const x of lista_materiais){
            materiais = `<div class="estilo_aviso">
                         <div class="primeira_area laranja_1">${x['materia']}</div>
                         <div class="segunda_area laranja_2">${x['tipo_material']}</div>
                         <div class="terceira_area laranja_3">
                            <p><strong>Assunto:</strong> ${x['assunto']}</p>
                            <p>${String(x['material'])}</p>
                            <p>${String(x['descricao'])}</p>
                         </div>
                      </div>`+materiais;
        };
        exibicaoMateriais.innerHTML = materiais;
    }
   
};

if(exibicaoEventos){
    let texto = exibicaoEventos.textContent;
    if(texto === "Não há informativos desse tipo registrado."){
        exibicaoEventos.innerHTML = `<p><em>${texto}</em></p>`;
    }else{
        texto = texto.replaceAll("''", '""');
        texto = texto.replaceAll("'", '"');
        const lista_eventos = JSON.parse(texto);
        let eventos = ``;
        for(const x of lista_eventos){
            eventos = `<div class="estilo_aviso">
                         <div class="primeira_area roxo_1">${x['data_evento']} ${x['hora_evento']}</div>
                         <div class="segunda_area  roxo_2">${String(x['nome'])}</div>
                         <div class="terceira_area  roxo_3">${String(x['descricao'])}</div>
                      </div>`+eventos;
        };
        exibicaoEventos.innerHTML = eventos;
    }
    
}