import {Aviso, lista_id_avisos, lista_avisos} from "../../Rascunho Web/dados.mjs"

//Script de criação de avisos do sistema
export const formAviso = () => {
    const tipoAviso = document.getElementById("tipo").value;
    const assunto = document.getElementById("assunto").value;
    const data = new Date(document.getElementById("data").value);
    const hora = new Date(document.getElementById("data").value);
}