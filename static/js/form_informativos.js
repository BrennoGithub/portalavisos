//ADICIONAR UM BOTÃO DE OPÇÕES PARA ASSUNTO
export function formularios(elemento, tipoformulario){
    switch (tipoformulario){
        case 'Aviso':
            elemento.innerHTML = `
            <div class="areaTitulo">
                <h1>Informativo</h1><hr>
            </div>

            <form class="formAviso" method="POST" action="/submit_informativo">

            <fieldset class="area_campo_form">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto do Informativo">
            </fieldset>

            <fieldset class="texto_campo_form">
                <legend><label for="texto">Texto</label></legend>
                <textarea placeholder="Aviso" id="texto" name="texto" class="campo_form"></textarea>
            </fieldset>

            <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
            </form>`;
            break;

        case 'Avaliação':
            elemento.innerHTML = `
            <div class="areaTitulo">
                <h1>Informativo</h1><hr>
            </div>
            
            <form class="formAviso" method="POST" action="/submit_informativo">
            
            <fieldset class="area_campo_form">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" value="Avaliação" placeholder="Assunto do Informativo">
            </fieldset>
           
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
            </div>

            <fieldset class="texto_campo_form">
                <legend><label for="descricao">Descrição</label></legend>
                <textarea placeholder="Descrição da avaliação" id="descricao" name="descricao" class="campo_form"></textarea>
            </fieldset>

            <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
            </form>`;
            break;

        case 'Evento':
            elemento.innerHTML = `
            <div class="areaTitulo">
                <h1>Informativo</h1><hr>
            </div>

            <form class="formAviso" method="POST" action="/submit_informativo">

            <fieldset class="area_campo_form">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" value="Evento" placeholder="Assunto do Informativo">
            </fieldset>
            
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

            <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
            </form>`;
            break;

        case 'Material Didatico':
            elemento.innerHTML = `
            <div class="areaTitulo">
                <h1>Informativo</h1><hr>
            </div>

            <form class="formAviso" method="POST" action="/submit_informativo">

            <fieldset class="area_campo_form">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" value="Material Didatico" placeholder="Assunto do Informativo">
            </fieldset>
            
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
            </div>

            <fieldset class="texto_campo_form">
                <legend><label for="descricao">Descrição</label></legend>
                <textarea placeholder="Descrição do material" id="descricao" name="descricao" class="campo_form"></textarea>
            </fieldset>

            <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
            </form>`;
            break;

        default:
            elemento.innerHTML = `
            <div class="areaTitulo">
                <h1>Informativo</h1><hr>
            </div>

            <form class="formAviso" method="POST" action="/submit_informativo">
            
            <fieldset class="area_campo_form">
                <legend><label for="assunto">Assunto</label></legend>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto do Informativo">
            </fieldset>

            <fieldset class="texto_campo_form">
                <legend><label for="texto">Texto</label></legend>
                <textarea placeholder="Aviso" id="texto" name="texto" class="campo_form"></textarea>
            </fieldset>

            <button type="submit" id="criaAviso" class="botao_campo_form">Criar</button>
            </form>`;
            break;
    };
};