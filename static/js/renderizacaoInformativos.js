import { GET } from "./requisicaoHTTP.js";
import { formataDatas } from "./datas_informativos.js"

//A LISTA DE INFORMATIVOS JÁ VEM DO SERVIDOR ORGANIZADAS   
export async function renderizaInformativos(elemento, rotaAPI) {
    if(!elemento){
        return "Elemento inexistente.";
    }

    elemento.innerHTML = "<div class='carregando spinner'></div>"

    let informativos = await GET(`/informativos${rotaAPI}`);
    if(informativos === "404 - Não foi encontrado informativo desse tipo." || informativos === "404 - Não encontrado."){
        elemento.innerHTML = `<em>${informativos}</em>`;
    }
    informativos = formataDatas(informativos, "dataCriacao");

    const STATIC_URL = "/static/";
    let conteudo = ``;
    
    switch (rotaAPI){
        case "/avisos":
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                    <div class="terceira_area  azul_2"> ${String(x['mensagem'])} <br> 'anexo'
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataCriacao']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
                
            };
            conteudo = `<div class="areaTitulo"> <h2>Avisos</h2> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;

        case "/avaliacoes":
            informativos = formataDatas(informativos, "dataAvaliacao");
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                    <div class="terceira_area  verde_2">
                        <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])}
                        <div><strong>Horario:</strong> <em>${x['dataAvaliacao']}</em> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataCriacao']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Avaliações</h2> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;

        case "/materiais":
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area laranja_1">${x['materia']}</div>
                    <div class="terceira_area laranja_2">
                        <strong>Assunto:</strong> ${x['assuntoMaterial']} <br>
                        ${String(x['mensagem'])} <br> ANEXO
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataCriacao']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Materiais</h2> </div> <div class="areaCorpo">${conteudo}</div>`;
            break;
        
        case "/eventos":
            informativos = formataDatas(informativos, 'data_InicioEvento');
            informativos = formataDatas(informativos, 'data_FinalEvento');
            for(const x of informativos){
                conteudo = `
                <div class="estilo_aviso">
                    <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                    <div class="terceira_area  roxo_2">
                        <strong>Dia(s):</strong> <em>${x['data_InicioEvento']} a ${x['data_FinalEvento']}</em> <br>
                        <strong>Horário:</strong> <em>${x['hora_InicioEvento']} - ${x['hora_FinalEvento']}</em> <br> ${String(x['mensagem'])}
                        <div class="blocoFinal">
                            <div class="botoesEdit">
                                <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                            </div>
                            <div class="dataCriacao">${x['dataCriacao']} - ${x['horaInformativo']}</div>
                        </div>
                    </div>
                </div>`+conteudo;
            };
            conteudo = `<div class="areaTitulo"> <h2>Eventos</h2> </div> <div class="areaCorpo">${conteudo}<div>`;
            break;

        default:
            for(const x of informativos){
                switch (x['assunto']){
                    case "Avaliação":
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  verde_1">${x['tipoAvaliacao']}</div>
                            <div class="terceira_area  verde_2">
                                <strong>Assunto:</strong> ${String(x['assuntoAvaliacao'])} <br>
                                <strong>Horario:</strong> <em>${x['dataAvaliacao']}</em> <br> ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataCriacao']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                    case "Evento":
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  roxo_1">${String(x['nomeEvento'])}</div>
                            <div class="terceira_area  roxo_2">
                                <strong>Dia(s):</strong> <em>${x['data_InicioEvento']} a ${x['data_FinalEvento']}</em> <br>
                                <strong>Horário:</strong> <em>${x['hora_InicioEvento']} - ${x['hora_FinalEvento']}</em> <br> ${String(x['mensagem'])}
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataCriacao']}</div>
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
                                ${String(x['mensagem'])} <br> ANEXO
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataCriacao']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                    default:
                        conteudo = `
                        <div class="estilo_aviso">
                            <div class="segunda_area  azul_1">${String(x['assunto'])}</div>
                            <div class="terceira_area  azul_2">${String(x['mensagem'])} <br> ANEXO
                                <div class="blocoFinal">
                                    <div class="botoesEdit">
                                        <img src="${STATIC_URL}icones/Delete.svg" alt="Icone Delete" class="icone_delete">
                                        <img src="${STATIC_URL}icones/Edit.svg" alt="Icone Delete" class="icone_delete">
                                    </div>
                                    <div class="dataCriacao">${x['dataCriacao']}</div>
                                </div>
                            </div>
                        </div>`+conteudo;
                        break;
                };
            };
            conteudo = `
            <div class="areaTitulo"> <h2>Mural</h2> </div> 
            <div class="areaCorpo">${conteudo}</div>`;
            break;
    };
    elemento.innerHTML = conteudo;
};