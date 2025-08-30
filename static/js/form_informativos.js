//ADICIONAR UM BOTÃO DE OPÇÕES PARA ASSUNTO
export function formularios(elemento){
    elemento.innerHTML = `
        <div class="areaTitulo">
            <h1>Informativo</h1><hr>
        </div>

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

        <fieldset class="texto_campo_form">
            <legend><label for="texto">Texto</label></legend>
            <textarea placeholder="Aviso" id="texto" name="texto" class="campo_form"></textarea>
        </fieldset>

        <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
        </form>`;
};

export function exibicaoOpcoes(assunto, opcoesInformativos){
    assunto.addEventListener("focus", function(){
    switch (opcoesInformativos.style.display){
        case "none":
            opcoesInformativos.style.display = "block";
            break;
        case "block":
            opcoesInformativos.style.display = "none";
            break
      default:
            opcoesInformativos.style.display = "block";
            break;
    }
})
}

export function assuntoInformativo(elemento, assunto){
    switch (assunto){
        case 'Avaliação':
            elemento.innerHTML = `           
            <div class="linhaUnica">
                <fieldset class="area_campo_form  linhaitem1">
                    <legend><label for="materia">Materia</label></legend>
                    <input type="text" name="materia" id="materia" placeholder="Materia da avaliação">
                </fieldset>

                <fieldset class="area_campo_form linhaitem2">
                    <legend><label for="assunto">Assunto da Avaliação</label></legend>
                    <input type="text" name="assunto" id="assunto" placeholder="Assunto da avaliação">
                </fieldset>
            </div>

            <div class="linhaUnica">
                <fieldset class="area_campo_form linhaitem1">
                    <legend><label for="data">Data</label></legend>
                    <input type="date" name="data" id="data">
                </fieldset>

                <fieldset class="area_campo_form linhaitem2">
                    <legend><label for="hora">Hora</label></legend>
                    <input type="time" name="hora" id="hora">
                </fieldset>
            </div>`;
            break;

        case 'Evento':
            elemento.innerHTML = `    
            <fieldset class="area_campo_form">
                <legend><label for="nome">Nome do Evento</label></legend>
                <input type="text" name="nome" id="nome" placeholder="nome do evento">
            </fieldset>

            <div class="linhaUnica">
                <fieldset class="area_campo_form linhaitem1">
                    <legend><label for="data">Data</label></legend>
                    <input type="date" name="data" id="data">
                </fieldset>

                <fieldset class="area_campo_form linhaitem2">
                    <legend><label for="hora">Hora</label></legend>
                    <input type="time" name="hora" id="hora">
                </fieldset>
            </div>`;
            break;

        case 'Material Didatico':
            elemento.innerHTML = `
            <div class="linhaUnica">
                <fieldset class="area_campo_form linhaitem1" >
                    <legend><label for="materia">Materia</label></legend>
                    <input type="text" name="materia" id="materia" placeholder="Materia">
                </fieldset>

                <fieldset class="area_campo_form linhaitem2"  >
                    <legend><label for="assunto">Assunto do Material</label></legend>
                    <input type="text" name="assunto" id="assunto" placeholder="Assunto do Material Didatico">
                </fieldset>
            </div>

            <div class="linhaUnica">
                <fieldset class="area_campo_form" style="width: 100%; display: flex;">
                    <legend><label for="tipo_material">Material</label></legend>
                    <select name="tipo_material" id="tipo_material" style="margin: 0 10px 0 10px; width: 25%; height: 30px">
                        <option value="">Tipo</option>
                        <option value="url">Link</option>
                        <option value="img">Imagem</option>
                        <option value="file">Arquivo</option>
                    </select>
                    <input type="text" name="material" id="material" placeholder="Material" style="margin: 0 10px 0 0px; width: 75%;">
                </fieldset>
            </div>`;
            break;
        
        default:
            elemento.innerHTML = "";
            break;
    };
}