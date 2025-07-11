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
        exibicaoAvisos.innerHTML = `
        <div class="areaMaterial">
            <h2>Avisos</h2><hr>
            ${avisos}
        </div>
        `;
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
                         <div class="primeira_area verde_1">
                            <p>${x['data_avaliacao']} ${x['hora_avaliacao']}</p>
                         </div>
                         <div class="segunda_area  verde_2">
                            <p>${x['materia']}</p>
                         </div>
                         <div class="terceira_area  verde_3">
                            ASSUNTO: ${String(x['assunto'])}
                            <p>${String(x['descricao'])}</p>
                         </div>
                      </div>`+avaliacoes;
    };
        exibicaoAvalicoes.innerHTML = `
        <div class="areaMaterial">
            <h2>Avaliações</h2><hr>
            ${avaliacoes}
        </div>
        `;
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
                         <div class="primeira_area laranja_1">
                            <p>${x['materia']}</p>
                         </div>
                         <div class="segunda_area laranja_2">
                            <p>${x['tipo_material']}</p>
                         </div>
                         <div class="terceira_area laranja_3">
                            <p><strong>Assunto:</strong> ${x['assunto']}</p>
                            <p>${String(x['material'])}</p>
                            <p>${String(x['descricao'])}</p>
                         </div>
                      </div>`+materiais;
        };
        exibicaoMateriais.innerHTML = `
        <div class="areaMaterial">
            <h2>Material de Estudo</h2><hr>
            ${materiais}
        </div> 
        `;
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
        exibicaoEventos.innerHTML = `
        <div class="areaMaterial">
            <h2>Eventos</h2><hr>
            ${eventos}
        </div> 
        `;
    }
    
}