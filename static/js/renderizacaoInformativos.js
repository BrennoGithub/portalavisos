import { requisicaoHTTP } from "./requisicaoHTTP.js";
import { ordenarInformativos } from "./organizar_informativos.js"

//ALTERAR O FORMATO DA FUNÇÃO DO MURAL      
export async function renderizaInformativos(elemento, tipo) {
    if(!elemento){
        return "Elemento inexistente.";
    }

    elemento.innerHTML = "<div class='carregando spinner'></div>"

    let informativos = await requisicaoHTTP(`/informativos/${tipo}`);

    if(informativos === "404 - Não foi encontrado informativo desse tipo." || informativos === "404 - Não encontrado."){
        elemento.innerHTML = `<em>${informativos}</em>`;
    }

    const STATIC_URL = "/static/";
    let conteudo = ``;
    
    switch (tipo){
        case "avisos":
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_2"> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
                
            };
            conteudo = `<div class="areaTitulo"> <h2>Avisos</h2><hr> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;

        case "avaliacoes":
            informativos = await ordenarInformativos(informativos, "dataAvaliacao"); //Organização de informativos em ordem cronologica
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                    <div class="terceira_area  verde_2">
                        <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])} <br>
                        <strong>Horario:</strong> <em>${x['dataAvaliacao']} - ${x['horaAvaliacao']}</em> <br> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Avaliações</h2><hr> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;

        case "materiais":
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area laranja_1">${x['materia']}</div>
                    <div class="terceira_area laranja_2">
                        <strong>Assunto:</strong> ${x['assuntoMaterial']} <br>
                        <strong>Anexo:</strong> ${x['anexo']} <br> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Materiais</h2><hr> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;
        
        case "eventos":
            informativos = await ordenarInformativos(informativos, "dataInicial_Evento");
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                    <div class="terceira_area  roxo_2">
                        <strong>Dia(s):</strong> <em>${x['dataInicial_Evento']} a ${x['dataFinal_Evento']}</em> <br>
                        <strong>Horário:</strong> <em>${x['horaInicial_Evento']} - ${x['horaFinal_Evento']}</em> <br> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Eventos</h2><hr> </div> <div class="areaCorpo">${conteudo}<div>`;
            break;

        case "todos":
            for(const x of informativos){
                switch (x['assunto']){
                    case "Avaliação":
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                            <div class="terceira_area  verde_2">
                                <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])} <br>
                                <strong>Horario:</strong> <em>${x['dataAvaliacao']} - ${x['horaAvaliacao']}</em> <br> ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                    case "Evento":
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                            <div class="terceira_area  roxo_2">
                                <strong>Dia(s):</strong> <em>${x['dataInicial_Evento']} a ${x['dataFinal_Evento']}</em> <br>
                                <strong>Horário:</strong> <em>${x['horaInicial_Evento']} - ${x['horaFinal_Evento']}</em> <br> ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                    case "Material Didatico":
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area laranja_1">${x['materia']}</div>
                            <div class="terceira_area laranja_2">
                                <strong>Assunto:</strong> ${x['assuntoMaterial']} <br>
                                <strong>Anexo:</strong> ${x['anexo']} <br> ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                    default:
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                            <div class="terceira_area  azul_2">${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataInformativo']} - ${x['horaInformativo']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                };
            };
            conteudo = `<div class="areaTitulo"> <h2>Mural</h2><hr> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;
    };
    elemento.innerHTML = conteudo;
};