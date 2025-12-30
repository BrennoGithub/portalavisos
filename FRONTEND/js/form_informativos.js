import {formataDataForm} from "./datas_informativos.js";

//ALTERAR AS CHAVES DAS DATAS DOS EVENTOS
export function dadosForm(assuntoForm){
    let dadosForm = {};
    dadosForm["assunto"] = assuntoForm === '' ? "Sem assunto" : assuntoForm;
    dadosForm["mensagem"] = document.getElementById("mensagem").value;
    //dadosForm["anexo"] = document.getElementById("anexo").value;
    //dadosForm["tipoAnexo"] = document.getElementById("tipoAnexo").value;
    
    switch (assuntoForm){
        case "Avaliação":
            dadosForm["tipoAvaliacao"] = document.getElementById("tipoAvaliacao").value;
            //dadosForm["materia"] = document.getElementById("materia").value
            dadosForm["materia"] = 1;
            dadosForm["assuntoAvaliacao"] = document.getElementById("assuntoAvaliacao").value;

            const dataAvaliacao = formataDataForm("data", document.getElementById("dataAvaliacao").value);
            dadosForm["dataAvaliacao"] = dataAvaliacao

            const horaAvaliacao = formataDataForm("hora", document.getElementById("horaAvaliacao").value);
            dadosForm["horaAvaliacao"] = horaAvaliacao
            break;

        case "Evento":
            dadosForm["nomeEvento"] = document.getElementById("nomeEvento").value;

            const data_InicioEvento = formataDataForm("data", document.getElementById("data_InicioEvento").value);
            dadosForm["data_InicioEvento"] = data_InicioEvento;
            
            const data_FinalEvento = formataDataForm("data", document.getElementById("data_FinalEvento").value);
            dadosForm["data_FinalEvento"] = data_FinalEvento;
            
            const hora_InicioEvento = formataDataForm("hora", document.getElementById("hora_InicioEvento").value);
            dadosForm["hora_InicioEvento"] = hora_InicioEvento;

            const hora_FinalEvento = formataDataForm("hora", document.getElementById("hora_FinalEvento").value);
            dadosForm["hora_FinalEvento"] = hora_FinalEvento;
            break;

        case "Material Didatico":
            //dadosForm["materia"] = document.getElementById("materia").value
            dadosForm["materia"] = 1;
            dadosForm["assuntoMaterial"] = document.getElementById("assuntoMaterial").value;
            break;
    }
    return dadosForm;
}