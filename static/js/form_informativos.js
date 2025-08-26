//ADICIONAR UM BOTÃO DE OPÇÕES PARA ASSUNTO
export function formInformativo(elemento){
    const form_aviso = `
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
    <legend><label for="assunto">Assunto da Avaliação</label></legend>
    <input type="text" name="assunto" id="assunto" placeholder="Assunto da avaliação">
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
</div>

<fieldset class="texto_campo_form">
    <legend><label for="descricao">Descrição</label></legend>
    <textarea placeholder="Descrição da avaliação" id="descricao" name="descricao" class="campo_form"></textarea>
</fieldset>

<button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>`;

const form_evento = `
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
</div>

<fieldset class="texto_campo_form">
    <legend><label for="descricao">Descrição</label></legend>
    <textarea placeholder="Descrição da avaliação" id="descricao" name="descricao" class="campo_form"></textarea>
</fieldset>

<button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>`;

const form_material = `
<div class="linhaUnica">
<fieldset class="area_campo_form linhaitem1" >
    <legend><label for="materia">Materia</label></legend>
    <input type="text" name="materia" id="materia" placeholder="Materia">
</fieldset>

<fieldset class="area_campo_form linhaitem2"  >
    <legend><label for="assunto">Assunto</label></legend>
    <input type="text" name="assunto" id="assunto" placeholder="Assunto">
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
</div>

<fieldset class="texto_campo_form">
    <legend><label for="descricao">Descrição</label></legend>
    <textarea placeholder="Descrição do material" id="descricao" name="descricao" class="campo_form"></textarea>
</fieldset>

<button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>`;

elemento.innerHTML = form_aviso;

document.getElementById("assunto_aviso").addEventListener('change', function(){
    const tipoInformativo = document.getElementById("assunto_aviso").value;

    switch(tipoInformativo){
        case 'avisos':
            elemento.innerHTML = form_aviso;
            break;

        case 'avaliacoes':
            elemento.innerHTML = form_avaliacao;
            break;

        case 'eventos':
            elemento.innerHTML = form_evento;
            break;

        case 'materiais':
            elemento.innerHTML = form_material;
            break;

        default:
            elemento.innerHTML = form_aviso;
            break;
        }
    });
};