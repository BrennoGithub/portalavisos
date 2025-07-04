const form_aviso = `
<fieldset class="area_campo_form">
    <legend><label for="assunto_aviso">Assunto</label></legend>
    <input type="text" placeholder="Assunto do aviso" id="assunto_aviso" name="assunto_aviso" class="campo_form">
</fieldset>

<fieldset class="texto_campo_form">
    <legend><label for="texto">Texto</label></legend>
    <textarea placeholder="Aviso" id="texto" name="texto" class="campo_form"></textarea>
</fieldset>

<button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>`;

const form_avaliacao = `
<fieldset class="area_campo_form">
    <legend><label for="materia">Materia</label></legend>
    <input type="text" name="materia" id="materia" placeholder="Materia da avaliação">
</fieldset>

<fieldset class="area_campo_form">
    <legend><label for="assunto">Assunto</label></legend>
    <input type="text" name="assunto" id="assunto" placeholder="Assunto da avaliação">
</fieldset>

<div style="display: flex;">
    <fieldset class="area_campo_form">
        <legend><label for="data">Data</label></legend>
        <input type="date" name="data" id="data">
    </fieldset>

    <fieldset class="area_campo_form">
        <legend><label for="hora">Hora</label></legend>
        <input type="time" name="hora" id="hora">
    </fieldset>
</div>

<fieldset class="texto_campo_form">
    <legend><label for="descricao">Descrição</label></legend>
    <textarea placeholder="Descrição da avaliação" id="descricao" name="descricao" class="campo_form"></textarea>
</fieldset>

<button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>`;

const form_evento = `Formulario Evento`;

const form_material = `Formulario Material didatico`;

document.getElementById("form_informativo").innerHTML = form_aviso;

document.getElementById("tipo_aviso").addEventListener('change', function(){
    const tipoInformativo = document.getElementById("tipo_aviso").value;

    switch(tipoInformativo){
        case 'aviso':
            document.getElementById("form_informativo").innerHTML = form_aviso;
            break;

        case 'avaliacao':
            document.getElementById("form_informativo").innerHTML = form_avaliacao;
            break;

        case 'evento':
            document.getElementById("form_informativo").innerHTML = form_evento;
            break;

        case 'material':
            document.getElementById("form_informativo").innerHTML = form_material;
            break;

    }
});