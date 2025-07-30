import { requisiçãoHTTP } from "../../requisicaoHTTP";

//VER E CORRIGIR ERROS NO SCRIPT.
const exibicaoAvisos = document.querySelector('.exibicaoAvisos');
    const exibicaoAvalicoes = document.querySelector('.exibicaoAvaliacoes');
    const exibicaoMateriais = document.querySelector('.exibicaoMateriais');
    const exibicaoEventos = document.querySelector('.exibicaoEventos');
    const informativo = requisiçãoHTTP("/informativos/avisos");
    alert(informativo)


//Função responsavel pela exibição de informativos.
document.addEventListener("DOMContentLoaded", function(){
    if (exibicaoAvisos) {
        if(informativo === "Não há informativos desse tipo registrado."){
            exibicaoAvisos.innerHTML = `<em>${informativo}</em>`;
        }else{
            const lista_avisos = informativo;
            console.log(informativo)
            exibicaoAvisos.innerHTML = "lista_avisos"
            /*let avisos = ``;
            for(const x of lista_avisos){
                avisos = `<div class="estilo_aviso">
                    <div class="primeira_area  azul_1">
                        ${x['data']} ${x['hora']}
                    </div>
                    <div class="segunda_area  azul_2">
                        ${String(x['assunto'])}
                    </div>
                    <div class="terceira_area  azul_3">
                        ${String(x['texto'])}
                    </div>
                    <div class="quarta_area  azul_1">
                        <button><img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete"></button>
                        <button><img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete"></button>
                    </div>
                </div>`+avisos;
            };

        exibicaoAvisos.innerHTML = `<div class="areaMaterial">
            <h2>Avisos</h2><hr>
                ${avisos}
            </div>`;*/
        };
    };

    if(exibicaoAvalicoes){
        let texto = exibicaoAvalicoes.textContent;
        if(texto === "Não há informativos desse tipo registrado."){
            exibicaoAvalicoes.innerHTML = `<em>${texto}</em>`;
        }else{
            texto = texto.replaceAll("''", '""');
            texto = texto.replaceAll("'", '"');
            const lista_avaliacoes = JSON.parse(texto);
            let avaliacoes = ``;
            for(const x of lista_avaliacoes){
                avaliacoes = `<div class="estilo_aviso">
                         <div class="primeira_area verde_1">
                            ${x['data_avaliacao']} ${x['hora_avaliacao']}
                         </div>
                         <div class="segunda_area  verde_2">
                            ${x['materia']}
                         </div>
                         <div class="terceira_area  verde_3">
                            <strong>Assunto:</strong> ${String(x['assunto'])}
                                <br>
                            ${String(x['descricao'])}
                         </div>
                         <div class="quarta_area  verde_1">
                            <button><img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete"></button>
                            <button><img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete"></button>
                         </div>
                      </div>`+avaliacoes;
            };

        exibicaoAvalicoes.innerHTML = `<div class="areaMaterial">
            <h2>Avaliações</h2><hr>
            ${avaliacoes}
        </div>`;
    }
    
    };

    if(exibicaoMateriais){
        let texto = exibicaoMateriais.textContent;
        if(texto === "Não há informativos desse tipo registrado."){
            exibicaoMateriais.innerHTML = `<em>${texto}</em>`;
        }else{
            texto = texto.replaceAll("''", '""');
            texto = texto.replaceAll("'", '"');
            const lista_materiais = JSON.parse(texto);
            let materiais = ``;
        for(const x of lista_materiais){
            materiais = `<div class="estilo_aviso">
                         <div class="primeira_area laranja_1">
                            ${x['tipo_material']}
                         </div>
                         <div class="segunda_area laranja_2">
                            ${x['materia']}
                         </div>
                         <div class="terceira_area laranja_3">
                            <strong>Assunto:</strong> ${x['assunto']}
                                <br>
                            ${String(x['material'])}
                            ${String(x['descricao'])}
                         </div>
                         <div class="quarta_area  laranja_1">
                            <button><img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete"></button>
                            <button><img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete"></button>
                         </div>
                      </div>`+materiais;
        };

        exibicaoMateriais.innerHTML = `<div class="areaMaterial">
            <h2>Material de Estudo</h2><hr>
                ${materiais}
            </div> `;
    }
   
    };

    if(exibicaoEventos){
        let texto = exibicaoEventos.textContent;
        if(texto === "Não há informativos desse tipo registrado."){
            exibicaoEventos.innerHTML = `<em>${texto}</em>`;
        }else{
            texto = texto.replaceAll("''", '""');
            texto = texto.replaceAll("'", '"');
            const lista_eventos = JSON.parse(texto);
            let eventos = ``;
        for(const x of lista_eventos){
            eventos = `<div class="estilo_aviso">
                         <div class="primeira_area roxo_1">
                            ${x['data_evento']} ${x['hora_evento']}
                         </div>
                         <div class="segunda_area  roxo_2">
                            ${String(x['nome'])}
                         </div>
                         <div class="terceira_area  roxo_3">
                            ${String(x['descricao'])}
                         </div>
                         <div class="quarta_area  roxo_1">
                            <button><img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete"></button>
                            <button><img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete"></button>
                         </div>
                      </div>`+eventos;
        };

        exibicaoEventos.innerHTML = `
        <div class="areaMaterial">
            <h2>Eventos</h2><hr>
            ${eventos}
        </div> 
        `;
    }
    
    };
});

