import {formataDataForm} from "./datas_informativos.js";

export function formularios(elemento){
    elemento.innerHTML = `
    <div class="areaTitulo"> <h1>Informativo</h1> </div>
    <div class="areaCorpo">
        <form class="formAviso">
            <fieldset class="area_campo_assunto">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto do Informativo" autocomplete="off">
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
                        <option value="">Tipo</option> <option value="url">Link</option>
                        <option value="img">Imagem</option> <option value="file">Arquivo</option>
                    </select>
                    <input type="text" name="anexo" id="anexo" placeholder="Arquivo anexado" autocomplete="off">
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
                    <input type="text" name="assuntoAvaliacao" id="assuntoAvaliacao" placeholder="Assunto da avaliação" autocomplete="off">
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
                    <label> <em>Inicio:</em> <input type="date" name="dataInicial_Evento" id="dataInicial_Evento" class="areaDate"> </label>
                    <label> <em>Fim:</em> <input type="date" name="dataFinal_Evento" id="dataFinal_Evento" class="areaDate"> </label>
                </div>
            </fieldset>
            <fieldset class="area_campo_form">
                <legend><label for="hora">Horario do Evento</label></legend>
                <div class="linhaUnica">
                    <label> <em>Inicio:</em> <input type="time" name="horaInicial_Evento" id="horaInicial_Evento" class="areaDate"> </label>
                    <label> <em>Fim:</em> <input type="time" name="horaFinal_Evento" id="horaFinal_Evento" class="areaDate"> </label>
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

//ALTERAR AS CHAVES DAS DATAS DOS EVENTOS
export function dadosForm(assuntoForm){
    let dadosForm = {}
    dadosForm["assunto"] = assuntoForm;
    dadosForm["mensagem"] = document.getElementById("mensagem").value;
    dadosForm["anexo"] = document.getElementById("anexo").value;
    dadosForm["tipoAnexo"] = document.getElementById("tipoAnexo").value;
    
    switch (assuntoForm){
        case "Avaliação":
            dadosForm["tipoAvaliacao"] = document.getElementById("tipoAvaliacao").value
            dadosForm["materia"] = document.getElementById("materia").value
            dadosForm["assuntoAvaliacao"] = document.getElementById("assuntoAvaliacao").value

            const dataAvaliacao = formataDataForm("data", new Date(document.getElementById("dataAvaliacao").value));
            dadosForm["dataAvaliacao"] = dataAvaliacao

            const horaAvaliacao = formataDataForm("hora", new Date(document.getElementById("horaAvaliacao").value));
            dadosForm["horaAvaliacao"] = horaAvaliacao
            break;

        case "Evento":
            dadosForm["nomeEvento"] = document.getElementById("nomeEvento").value

            const dataInicial_Evento = formataDataForm("data", new Date(document.getElementById("dataInicial_Evento").value));
            dadosForm["data_InicioEvento"] = dataInicial_Evento
            
            const dataFinal_Evento = formataDataForm("data", new Date(document.getElementById("dataFinal_Evento").value));
            dadosForm["data_FinalEvento"] = dataFinal_Evento
            
            const horaInicial_Evento = formataDataForm("hora", new Date(document.getElementById("horaInicial_Evento").value));
            dadosForm["hora_InicioEvento"] = horaInicial_Evento

            const horaFinal_Evento = formataDataForm("hora", new Date(document.getElementById("horaFinal_Evento").value));
            dadosForm["hora_FinalEvento"] = horaFinal_Evento
            break;

        case "Material Didatico":
            dadosForm["materia"] = document.getElementById("materia").value
            dadosForm["assuntoMaterial"] = document.getElementById("assuntoMaterial").value
            break;
    }
    return dadosForm;
}