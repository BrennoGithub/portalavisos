//Script de criação de avisos do sistema
export const formAviso = () => {
    document.getElementById("Adi_Mural").addEventListener("click", () => {
        document.querySelector(".areaAdicao").innerHTML = `<form>
        <label for="tipoAviso">Adicionar:</label>
        <select id="tipoAviso">
            <option value="aviso">Aviso</option>
            <option value="material didatico">Material Didatico</option>
            <option value="avaliacao">Avaliação</option>
        </select>
            <br>
        <label for="dia">Dia:</label> <input type="date" id="dia"> <label for="hora">Hora:</label> <input type="time" id="hora" min="06:00" max="22:00">
            <br>
        <textarea width="300px" placeholder="Aviso"></textarea>
    </form>`;
    })
}