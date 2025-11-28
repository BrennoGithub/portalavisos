import {formataDataForm} from "./datas_informativos.js";

//ALTERAR AS CHAVES DAS DATAS DOS EVENTOS
export function dadosForm(assuntoForm){
    let dadosForm = {}
    dadosForm["assunto"] = assuntoForm;
    dadosForm["mensagem"] = document.getElementById("mensagem").value;
    //dadosForm["anexo"] = document.getElementById("anexo").value;
    //dadosForm["tipoAnexo"] = document.getElementById("tipoAnexo").value;
    
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