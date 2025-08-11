import { requisicaoHTTP } from "./requisicaoHTTP.js";

export async function renderizaInformativos(elemento, tipo) {
    if(!elemento){
        return "Elemento inexistente.";
    }

    elemento.innerHTML = "<span class='carregando area'>Carregando...</span>"

    const informativos = await requisicaoHTTP(`/informativos/${tipo}`);

    if(informativos === "404 - Não foi encontrado informativo desse tipo." || informativos === "404 - Não encontrado."){
        elemento.innerHTML = `<em>${informativos}</em>`;
    }

    const STATIC_URL = "/static/";
    
    switch (tipo){
        case "avisos":
            let avisos = ``;
            for(const x of informativos){
                avisos = `<div class="estilo_aviso">
                    <div class="primeira_area  azul_1">${x['data']} ${x['hora']}</div>
                    <div class="segunda_area  azul_2">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_3">${String(x['texto'])}</div>
                    <div class="quarta_area  azul_1">
                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                    </div>
                </div>`+avisos;
            };
            avisos = `<div class="areaMaterial"><h2>Avisos</h2><hr> ${avisos} </div>`;
            elemento.innerHTML = avisos;
            break;

        case "avaliacoes":
            let avaliacoes = ``;
            for(const x of informativos){
                avaliacoes = `<div class="estilo_aviso">
                        <div class="primeira_area verde_1">${x['data_avaliacao']} ${x['hora_avaliacao']}</div>
                        <div class="segunda_area  verde_2">${x['materia']}</div>
                        <div class="terceira_area  verde_3">
                            <strong>Assunto:</strong> ${String(x['assunto'])}
                                <br>
                            ${String(x['descricao'])}
                        </div>
                        <div class="quarta_area  verde_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                        </div>
                    </div>`+avaliacoes;
            };
            avaliacoes = `<div class="areaMaterial"><h2>Avaliações</h2><hr> ${avaliacoes} </div>`;
            elemento.innerHTML = avaliacoes;
            break;

        case "materiais":
            let materiais = ``;
            for(const x of informativos){
                materiais = `<div class="estilo_aviso">
                        <div class="primeira_area laranja_1">${x['tipo_material']}</div>
                        <div class="segunda_area laranja_2">${x['materia']}</div>
                        <div class="terceira_area laranja_3">
                            <strong>Assunto:</strong> ${x['assunto']}
                                <br>
                            ${String(x['material'])} ${String(x['descricao'])}
                        </div>
                        <div class="quarta_area  laranja_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                        </div>
                    </div>`+materiais;
            };
            materiais = `<div class="areaMaterial"><h2>Materiais</h2><hr> ${materiais} </div>`;
            elemento.innerHTML = materiais;
            break;
        
        case "eventos":
            let eventos = ``;
            for(const x of informativos){
                eventos = `<div class="estilo_aviso">
                         <div class="primeira_area roxo_1">${x['data_evento']} ${x['hora_evento']}</div>
                         <div class="segunda_area  roxo_2">${String(x['nome'])}</div>
                         <div class="terceira_area  roxo_3">${String(x['descricao'])}</div>
                         <div class="quarta_area  roxo_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                         </div>
                      </div>`+eventos;
            };
            eventos = `<div class="areaMaterial"><h2>Eventos</h2><hr>${eventos}</div> `;
            elemento.innerHTML = eventos;
            break;

        case "todos":
            let mural = ``;
            for(const x of informativos['avisos']){
                mural = `<div class="estilo_aviso">
                    <div class="primeira_area  azul_1">${x['data']} ${x['hora']}</div>
                    <div class="segunda_area  azul_2">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_3">${String(x['texto'])}</div>
                    <div class="quarta_area  azul_1">
                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                    </div>
                </div>`+mural;
            };

            for(const x of informativos['avaliacoes']){
                mural = `<div class="estilo_aviso">
                        <div class="primeira_area verde_1">${x['data_avaliacao']} ${x['hora_avaliacao']}</div>
                        <div class="segunda_area  verde_2">${x['materia']}</div>
                        <div class="terceira_area  verde_3">
                            <strong>Assunto:</strong> ${String(x['assunto'])}
                                <br>
                            ${String(x['descricao'])}
                        </div>
                        <div class="quarta_area  verde_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                        </div>
                    </div>`+mural;
            };

            for(const x of informativos['materiais']){
                mural = `<div class="estilo_aviso">
                        <div class="primeira_area laranja_1">${x['tipo_material']}</div>
                        <div class="segunda_area laranja_2">${x['materia']}</div>
                        <div class="terceira_area laranja_3">
                            <strong>Assunto:</strong> ${x['assunto']}
                                <br>
                            ${String(x['material'])} ${String(x['descricao'])}
                        </div>
                        <div class="quarta_area  laranja_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                        </div>
                    </div>`+mural;
            };

            for(const x of informativos['eventos']){
                mural = `<div class="estilo_aviso">
                         <div class="primeira_area roxo_1">${x['data_evento']} ${x['hora_evento']}</div>
                         <div class="segunda_area  roxo_2">${String(x['nome'])}</div>
                         <div class="terceira_area  roxo_3">${String(x['descricao'])}</div>
                         <div class="quarta_area  roxo_1">
                            <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                            <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                         </div>
                      </div>`+mural;
            };
            mural = `<div class="areaMaterial"><h2>Mural</h2><hr>${mural}</div>`;
            elemento.innerHTML = mural;
            break;
    };
};