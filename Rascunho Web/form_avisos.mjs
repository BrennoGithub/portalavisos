import {Aviso, lista_id_avisos, lista_avisos} from "./dados.mjs"

//Script de criação de avisos do sistema
export const formAviso = () => {
    document.getElementById("Adi_Mural").addEventListener("click", (lista_id_avisos, lista_avisos) => {
        document.querySelector(".areaAdicao").innerHTML = `<form>
        <fieldset>
            <legend><h2>Aviso</h2></legend>

            <label for="tipo">Assunto:</label>
            <select id="tipo" class="formAviso">
                <option value="aviso">Aviso</option>
                <option value="material">Material Didatico</option>
                <option value="avaliacao">Avaliação</option>
            </select>
                <br>
            <textarea placeholder="Aviso"  class="formAviso" id="assunto"></textarea>
                <br>
            
            <label for="dia">Dia:</label> <input type="date" id="dia" class="formAviso">
            <label for="hora" style="margin-left: 20px;">Hora:</label> <input type="time" id="hora"  class="formAviso" min="06:00" max="22:00">
                <br>

            <button type="submit" class="formAviso" id="criaAviso">Criar</button>
        </fieldset>
    </form>`;
    });

    const tipoAviso = document.getElementById("tipo").value;
    const assunto = document.getElementById("assunto").value;
    const data = new Date(document.getElementById("data").value);
    const hora = new Date(document.getElementById("data").value);
}