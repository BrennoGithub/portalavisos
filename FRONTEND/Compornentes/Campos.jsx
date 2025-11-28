import {useState} from "react"
import "../static/css/estilo_login.css";
import "../static/css/estilo_global.css";
import "../static/css/estilo_formInformativos.css"

export function Campo({nomeCampo, tipoInput="text", id_campo, mensagemPlacerholder, obrigatorio=false}){
    return (
        <fieldset className="area_campo_form">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            {obrigatorio ? 
            <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} required/> : 
            <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder}/>}
        </fieldset>
    )
}

export function DoisCampos({tipoInput1="text", tipoInput2="text", nomeCampo1, nomeCampo2, id_campo1, id_campo2, mensagemPlacerholder1="", mensagemPlacerholder2=""}){
    return (
        <div className="linhaUnica">
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campo1}>{nomeCampo1}</label></legend>
                <input type={tipoInput1} name={id_campo1} id={id_campo1} placeholder={mensagemPlacerholder1}/>
            </fieldset>
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campo2}>{nomeCampo2}</label></legend>
                <input type={tipoInput2} name={id_campo2} id={id_campo2} placeholder={mensagemPlacerholder2}/>
            </fieldset>
        </div>
    )
}

export function CampoTexto({nomeCampo, id_campo, mensagemPlacerholder, obrigatorio=false}){
    return (
        <fieldset className="texto_campo_form">
            <legend><label htmlFor={id_campo}>{nomeCampo}</label></legend>
            {obrigatorio ? 
            <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form" required/> :
            <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form"/>}
        </fieldset>
    )  
}

export function TextoSelecao({listaOpcoes, nomeCampo, mensagemPlacerholder, id_campo, funcaoSelecao}){
    const [exibiOpcoes, setExibiOpcoes] = useState(false)
    const [assuntoInfo, setAssuntoInfo] = useState('')
    function ExibiOpcoes(){
        setExibiOpcoes(!exibiOpcoes);
    }

    function SelecionaTexto(Opcao){
        setAssuntoInfo(Opcao)
        ExibiOpcoes();
        funcaoSelecao ? funcaoSelecao(Opcao) : null
    }

    return (
        <fieldset className="area_campo_assunto">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            <input type="text" id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} autoComplete="off" onClick={() => {ExibiOpcoes()}} value={assuntoInfo}/>
            {exibiOpcoes ? <div className="areaOpcoes">
                {listaOpcoes.map((opcao, index) => (<a href="#" className="opcaoInformativo" key={index} id={index} onClick={() => {SelecionaTexto(opcao)}}>{opcao}</a>))}
            </div> : null}
        </fieldset>
    )
}

export function IntervaloTempo({tipoInput, nomeCampo, id_campo1, id_campo2, mensagemPlacerholder1, mensagemPlacerholder2}){
    return (
        <fieldset className="area_campo_form">
            <legend><label>{nomeCampo}</label></legend>
            <div className="linhaUnica">
                <label> 
                    <em>{mensagemPlacerholder1}</em> 
                    <input type={tipoInput} id={id_campo1} className="areaDate"/> 
                </label>
                <label> 
                    <em>{mensagemPlacerholder2}</em> 
                    <input type={tipoInput} id={id_campo2} className="areaDate"/> 
                </label>
            </div>
        </fieldset>
    )
}

export function CampoAnexo({nomeCampo, id_campo, mensagemPlacerholder}){
    return (
        <fieldset className="area_campo_form">
            <legend><label htmlFor="tipo_material">{nomeCampo}</label></legend>
                <div className="linhaUnica">
                    <select name="tipo_material" id="tipo_material">
                        <option value="">Tipo</option> <option value="url">Link</option>
                        <option value="img">Imagem</option> <option value="file">Arquivo</option>
                    </select>
                    <input type="text" name={id_campo} id={id_campo} placeholder={mensagemPlacerholder} autoComplete="off"/>
                </div>
        </fieldset>
    )
}
