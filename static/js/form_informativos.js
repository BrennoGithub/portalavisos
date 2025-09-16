//ADICIONAR UM BOTÃO DE OPÇÕES PARA ASSUNTO
export function formularios(elemento){
    elemento.innerHTML = `
    <div class="areaTitulo"> <h1>Informativo</h1> </div>

    <div class="areaCorpo">
        <form class="formAviso" method="POST" action="/submit_informativo">

        <fieldset class="area_campo_form">
            <legend><label for="assunto">Assunto</label></legend>
            <input type="text" name="assunto" id="assunto" placeholder="Assunto do Informativo">
            <div class="areaOpcoes">
                <a href="#" class="opcaoInformativo">Avaliação</a>
                <a href="#" class="opcaoInformativo">Evento</a>
                <a href="#" class="opcaoInformativo">Material Didatico</a>
            </div>
        </fieldset>

        <div class="dadosAdicionais"></div>

        <fieldset class="area_campo_form">
            <legend><label for="tipo_material">Arquivo</label></legend>
            <div class="linhaUnica">
                <select name="tipo_material" id="tipo_material">
                    <option value="">Tipo</option>
                    <option value="url">Link</option>
                    <option value="img">Imagem</option>
                    <option value="file">Arquivo</option>
                </select>
                <input type="text" name="anexo" id="anexo" placeholder="Arquivo anexado">
            </div>
        </fieldset>

        <fieldset class="texto_campo_form">
            <legend><label for="texto">Mensagem</label></legend>
            <textarea placeholder="Mensagem" id="mensagem" name="mensagem" class="campo_form"></textarea>
        </fieldset>

        <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
        </form>
    <div>`;
};

export function assuntoInformativo(elemento, assunto){
    switch (assunto){
        case 'Avaliação':
            elemento.innerHTML = `
            <fieldset class="area_campo_form">
                <legend><label for="assunto">Tipo Avaliação</label></legend>
                <input type="text" name="tipoAvaliacao" id="tipoAvaliacao" placeholder="Ex.: Prova, seminario, lista de exercisios, etc.">
            </fieldset>         
            <div class="linhaUnica">
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="materia">Materia</label></legend>
                    <input type="text" name="materia" id="materia" placeholder="Materia da avaliação">
                </fieldset>
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="assunto">Assunto da Avaliação</label></legend>
                    <input type="text" name="assuntoAvaliacao" id="assuntoAvaliacao" placeholder="Assunto da avaliação">
                </fieldset>
            </div>
            <div class="linhaUnica">
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="data">Dia da Avaliação</label></legend>
                    <input type="date" name="dataAvaliacao" id="dataAvaliacao">
                </fieldset>
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="hora">Hora da Avaliação</label></legend>
                    <input type="time" name="horaAvaliacao" id="horaAvaliacao">
                </fieldset>
            </div>`;
            break;

        case 'Evento':
            elemento.innerHTML = `    
            <fieldset class="area_campo_form">
                <legend><label for="nomeEvento">Nome do Evento</label></legend>
                <input type="text" name="nomeEvento" id="nomeEvento" placeholder="Nome do evento">
            </fieldset>
            <fieldset class="area_campo_form">
                <legend><label for="data">Dias do Evento</label></legend>
                <div class="linhaUnica">
                    <label>
                        <em>Inicio:</em> <input type="date" name="dataInicial_Evento" id="dataInicial_Evento" class="areaDate"> 
                    </label>
                    <label> 
                        <em>Fim:</em> <input type="date" name="dataFinal_Evento" id="dataFinal_Evento" class="areaDate"> 
                    </label>
                </div>
            </fieldset>
            <fieldset class="area_campo_form">
                <legend><label for="hora">Horario do Evento</label></legend>
                <div class="linhaUnica">
                    <label> 
                        <em>Inicio:</em> <input type="time" name="horaInicial_Evento" id="horaInicial_Evento" class="areaDate">
                    </label>
                    <label> 
                        <em>Fim:</em> <input type="time" name="horaFinal_Evento" id="horaFinal_Evento" class="areaDate"> 
                    </label>
                </div>
            </fieldset>`;
            break;

        case 'Material Didatico':
            elemento.innerHTML = `
            <div class="linhaUnica">
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="materia">Materia</label></legend>
                    <input type="text" name="materia" id="materia" placeholder="Materia">
                </fieldset>
                <fieldset class="area_campo_form caixaInterna">
                    <legend><label for="assunto">Assunto do Material</label></legend>
                    <input type="text" name="assuntoMaterial" id="assuntoMaterial" placeholder="Assunto do Material Didatico">
                </fieldset>
            </div>`;
            break;
        
        default:
            elemento.innerHTML = "";
            break;
    };
}

export function exibicaoOpcoes(elementoClicado, elementoOculto, tipoEvento, estadoPadrao){
    elementoClicado.addEventListener(tipoEvento, function(){
        switch (elementoOculto.style.display){
            case "none":
                elementoOculto.style.display = "flex";
                break;
            case "flex":
                elementoOculto.style.display = "none";
                break;
            default:
                elementoOculto.style.display = estadoPadrao;
                break;
        };
    });
};

export function dadosForm(assuntoForm){
    let dadosForm = {}
    //CRIAR OS OUTROS CASES DE ASSUNTO
    switch (assuntoForm){
        case "Avaliação":
            let dataAvaliacao = new Date(document.getElementById("dataAvaliacao").value);
            const dia = dataAvaliacao.getDay();
            const mes = Number(dataAvaliacao.getMonth()) + 1;
            const ano = dataAvaliacao.getFullYear();
            dataAvaliacao = `${ano}-${mes}-${dia}`;
            let horaAvaliacao = new Date(document.getElementById("horaAvaliacao").value);
            /*const hora = dataAvaliacao.getHours();
            const minuto = dataAvaliacao.getMinutes();
            horaAvaliacao = `${hora}:${minuto}`;
            AJUSTAR PROBLEMA DA HORA, QUE SÓ DA NULL E AJUSTAR DATA
            */

            dadosForm = {
                "assunto":assuntoForm,"tipoAvaliacao": document.getElementById("tipoAvaliacao").value, 
                "materia": document.getElementById("materia").value, 
                "assuntoAvaliacao": document.getElementById("assuntoAvaliacao").value,
                "dataAvaliacao": dataAvaliacao, "horaAvaliacao": horaAvaliacao, 
                "mensagem": document.getElementById("mensagem").value,
                "anexo": document.getElementById("anexo").value, 
            };
            break;
        case "Evento":
            const dataInicial_Evento = new Date(document.getElementById("dataInicial_Evento").value);
            const dataFinal_Evento = new Date(document.getElementById("dataFinal_Evento").value);
            const horaInicial_Evento = new Date(document.getElementById("horaInicial_Evento").value);
            const horaFinal_Evento = new Date(document.getElementById("horaFinal_Evento").value);
            dadosForm = {
                "assunto": assuntoForm, "nomeEvento": document.getElementById("nomeEvento").value, 
                "dataInicial_Evento": dataInicial_Evento, "dataFinal_Evento": dataFinal_Evento, 
                "horaInicial_Evento": horaInicial_Evento, "horaFinal_Evento": horaFinal_Evento,
                "mensagem": document.getElementById("mensagem").value, "anexo": document.getElementById("anexo").value
            }
            break;
        case "Material Didatico":
            dadosForm = {
                "assunto": assuntoForm, 
                "materia": document.getElementById("materia").value, 
                "assuntoMaterial": document.getElementById("assuntoMaterial").value,
                "mensagem": document.getElementById("mensagem").value, 
                "anexo": document.getElementById("anexo").value
            }
            break;
        default:
            dadosForm = {
                "assunto": assuntoForm,
                "mensagem": document.getElementById("mensagem").value,
                "anexo": document.getElementById("anexo").value, 
            };
    }
    return dadosForm;
}