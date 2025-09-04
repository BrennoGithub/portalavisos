import { requisicaoHTTP } from "./requisicaoHTTP.js";

//ALTERAR O FORMATO DA FUNÇÃO DO MURAL      
export async function renderizaInformativos(elemento, tipo) {
    if(!elemento){
        return "Elemento inexistente.";
    }

    elemento.innerHTML = "<div class='carregando spinner'></div>"

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
                <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_2">
                        ${String(x['mensagem'])}
                        <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                    </div>
                </div>`+avisos;
                
            };
            avisos = `
            <div class="areaTitulo">
                <h2>Avisos</h2><hr> 
            </div>
            <div class="areaMaterial">${avisos}</div>`;
            elemento.innerHTML = avisos;
            break;

        case "avaliacoes":
            let avaliacoes = ``;
            for(const x of informativos){
                avaliacoes = `<div class="estilo_aviso">
                        <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                        <div class="terceira_area  verde_2">
                            <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])}
                                <br>
                            <strong>Horario:</strong> <em>${x['dataAvaliacao']} - ${x['horaAvaliacao']}</em>
                                <br>
                            ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                        </div>
                        </div>`+avaliacoes;
            };
            avaliacoes = `
            <div class="areaTitulo">
                <h2>Avaliações</h2><hr> 
            </div>    
            <div class="areaMaterial">${avaliacoes}</div>`;
            elemento.innerHTML = avaliacoes;
            break;

        case "materiais":
            let materiais = ``;
            for(const x of informativos){
                materiais = `<div class="estilo_aviso">
                        <div class="segunda_area laranja_1">${x['materia']}</div>
                        <div class="terceira_area laranja_2">
                            <strong>Assunto:</strong> ${x['assuntoMaterial']}
                                <br>
                            <strong>Anexo:</strong> ${x['anexo']}
                                <br>
                            ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                        </div>
                        </div>`+materiais;
            };
            materiais = `
            <div class="areaTitulo">
                <h2>Materiais</h2><hr>
            </div>
            <div class="areaMaterial">${materiais}</div>`;
            elemento.innerHTML = materiais;
            break;
        
        case "eventos":
            let eventos = ``;
            for(const x of informativos){
                eventos = `<div class="estilo_aviso">
                        <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                        <div class="terceira_area  roxo_2">
                            <strong>Dia(s):</strong> <em>${x['dataInicial_Evento']} a ${x['dataFinal_Evento']}</em>
                                <br>
                            <strong>Horário:</strong> <em>${x['horaInicial_Evento']} - ${x['horaFinal_Evento']}</em>
                                <br>
                            ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                         </div>
                         </div>`+eventos;
            };
            eventos = `
            <div class="areaTitulo">
                <h2>Eventos</h2><hr>
            </div>
            <div class="areaMaterial">${eventos}<div>`;
            elemento.innerHTML = eventos;
            break;

        case "todos":
            let mural = ``;
            for(const x of informativos){
                switch (x['assunto']){
                    case "Avaliação":
                        mural = `<div class="estilo_aviso">
                        <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                        <div class="terceira_area  verde_2">
                            <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])}
                                <br>
                            <strong>Horario:</strong> <em>${x['dataAvaliacao']} - ${x['horaAvaliacao']}</em>
                                <br>
                            ${String(x['mensagem'])}
                            <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                        </div>
                        </div>`+mural;
                        break;
                    case "Evento":
                        mural = `<div class="estilo_aviso">
                        <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                        <div class="terceira_area  roxo_2">
                            <strong>Dia(s):</strong> <em>${x['dataInicial_Evento']} a ${x['dataFinal_Evento']}</em>
                                <br>
                            <strong>Horário:</strong> <em>${x['horaInicial_Evento']} - ${x['horaFinal_Evento']}</em>
                                <br>
                            ${String(x['mensagem'])}
                            <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                         </div>
                         </div>`+mural;
                         break;
                    case "Material Didatico":
                        mural = `<div class="estilo_aviso">
                        <div class="segunda_area laranja_1">${x['materia']}</div>
                        <div class="terceira_area laranja_2">
                            <strong>Assunto:</strong> ${x['assuntoMaterial']}
                                <br>
                            <strong>Anexo:</strong> ${x['anexo']}
                                <br>
                            ${String(x['mensagem'])}
                            <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                        </div>
                        </div>`+mural;
                        break;
                    default:
                        mural = `<div class="estilo_aviso">
                        <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                        <div class="terceira_area  azul_2">
                            ${String(x['mensagem'])}
                            <div class="blocoFinal">
                                <div class="botoesEdit">
                                    <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                    <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                </div>
                                <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                            </div>
                        </div>
                        </div>`+mural;
                        break;
                };
            };
            mural = `
            <div class="areaTitulo">
                <h2>Mural</h2><hr>
            </div>
            <div class="areaMaterial">${mural}</div>`;
            elemento.innerHTML = mural;
            break;
    };
};