import {useState} from "react"
import "../static/css/estilo_login.css";
import "../static/css/estilo_global.css";
import "../static/css/estilo_formInformativos.css"

//OS CAMPOS NÃO MUDAM DE ASSUNTO COMO O VALOR PRE-DEFINIDO. ALTERAR ISSO.
export function Campo({nomeCampo, tipoInput="text", id_campo, mensagemPlacerholder, valorCampo="", obrigatorio=false}){
    document.getElementById(id_campo).value = valorCampo;
    return (
        <fieldset className="area_campo_form">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            {obrigatorio ? 
            <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} required/> : 
            <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} />}
        </fieldset>
    )
}

export function DoisCampos({tiposInput=["text", "text"], nomesCampos, id_campos, mensagensPlacerholder, valoresCampos=["", ""]}){
    return (
        <div className="linhaUnica">
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campos[0]}>{nomesCampos[0]}</label></legend>
                <input type={tiposInput[0]} name={id_campos[0]} id={id_campos[0]} placeholder={mensagensPlacerholder[0]} value={valoresCampos[0]}/>
            </fieldset>
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campos[1]}>{nomesCampos[1]}</label></legend>
                <input type={tiposInput[1]} name={id_campos[1]} id={id_campos[1]} placeholder={mensagensPlacerholder[1]} value={valoresCampos[1]}/>
            </fieldset>
        </div>
    )
}

export function CampoTexto({nomeCampo, id_campo, mensagemPlacerholder, valorCampo="", obrigatorio=false}){
    return (
        <fieldset className="texto_campo_form">
            <legend><label htmlFor={id_campo}>{nomeCampo}</label></legend>
            {obrigatorio ? 
            <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form" value={valorCampo} required/> :
            <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form" value={valorCampo}/>}
        </fieldset>
    )  
}

export function TextoSelecao({listaOpcoes, nomeCampo, mensagemPlacerholder, id_campo, funcaoSelecao}){
    const [exibiOpcoes, setExibiOpcoes] = useState(false)
    const [assuntoInfo, setAssuntoInfo] = useState('')
    function ExibiOpcoes(){
        setExibiOpcoes(!exibiOpcoes);
    }

    function SelecionaTexto(event, ID_campo, Opcao){
        event.preventDefault();
        setAssuntoInfo(Opcao)
        document.getElementById(ID_campo).value = assuntoInfo;
        funcaoSelecao ? funcaoSelecao(Opcao) : null
        ExibiOpcoes();
    }

    return (
        <fieldset className="area_campo_assunto">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            <input type="text" id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} 
                autoComplete="off" onFocus={() => {ExibiOpcoes()}} onChange={() => {funcaoSelecao("")}}/>
            {exibiOpcoes ? <div className="areaOpcoes">
                {listaOpcoes.map((opcao, index) => (<a href="" className="opcaoInformativo" value={opcao[0]} key={index} id={index} onClick={(event) => {SelecionaTexto(event, id_campo, opcao[1])}}>{opcao[1]}</a>))}
            </div> : null}
        </fieldset>
    )
}

export function IntervaloTempo({tipoInput, nomeCampo, id_campos, mensagensPlacerholder, valoresCampos=["", ""]}){
    return (
        <fieldset className="area_campo_form">
            <legend><label>{nomeCampo}</label></legend>
            <div className="linhaUnica">
                <label> 
                    <em>{mensagensPlacerholder[0]}</em> 
                    <input type={tipoInput} id={id_campos[0]} className="areaDate" value={valoresCampos[0]}/> 
                </label>
                <label> 
                    <em>{mensagensPlacerholder[1]}</em> 
                    <input type={tipoInput} id={id_campos[1]} className="areaDate" value={valoresCampos[1]}/> 
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
