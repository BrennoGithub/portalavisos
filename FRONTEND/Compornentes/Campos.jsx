import { useState, useEffect } from "react"
import { Busca_ListaMaterias } from "../js/form_informativos.js"
import "../css/estilo_login.css";
import "../css/estilo_global.css";
import "../css/estilo_formInformativos.css"

export function Campo({ nomeCampo, tipoInput = "text", id_campo, mensagemPlacerholder, valorCampo = "", obrigatorio = false }) {
    useEffect(() => {
        document.getElementById(id_campo).value = valorCampo;
    }, []);

    return (
        <fieldset className="area_campo_form">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            {obrigatorio ?
                <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} required maxLength={100}/> :
                <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} maxLength={100}/>}
        </fieldset>
    )
}

export function DoisCampos({ tiposInput = ["text", "text"], nomesCampos, id_campos, mensagensPlacerholder = ["", ""], valoresCampos = ["", ""] }) {
    useEffect(() => {
        document.getElementById(id_campos[0]).value = valoresCampos[0];
        document.getElementById(id_campos[1]).value = valoresCampos[1];
    }, []);

    return (
        <div className="linhaUnica">
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campos[0]}>{nomesCampos[0]}</label></legend>
                <input type={tiposInput[0]} name={id_campos[0]} id={id_campos[0]} placeholder={mensagensPlacerholder[0]} />
            </fieldset>
            <fieldset className="area_campo_form caixaInterna">
                <legend><label htmlFor={id_campos[1]}>{nomesCampos[1]}</label></legend>
                <input type={tiposInput[1]} name={id_campos[1]} id={id_campos[1]} placeholder={mensagensPlacerholder[1]} />
            </fieldset>
        </div>
    )
}

export function CampoTexto({ nomeCampo, id_campo, mensagemPlacerholder, valorCampo = "", obrigatorio = false }) {
    useEffect(() => {
        document.getElementById(id_campo).value = valorCampo;
    }, []);

    return (
        <fieldset className="texto_campo_form">
            <legend><label htmlFor={id_campo}>{nomeCampo}</label></legend>
            {obrigatorio ?
                <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form" maxLength={400} required /> :
                <textarea placeholder={mensagemPlacerholder} id={id_campo} name={id_campo} className="campo_form" maxLength={400}/>}
        </fieldset>
    )
}

export function SelecaoAssunto({ funcaoSelecao }) {
    const [exibiOpcoes, setExibiOpcoes] = useState(false)
    const [assuntoInfo, setAssuntoInfo] = useState('')
    const listaOpcoes = [[1,"Avaliação"],[2,"Evento"],[3,"Material Didatico"]];

    function SelecionaTexto(event, Opcao) {
        event.preventDefault();
        setAssuntoInfo(Opcao);
        setExibiOpcoes(!exibiOpcoes);

    }

    useEffect(() => {
        document.getElementById("assunto").value = assuntoInfo;
        (async () => {funcaoSelecao(assuntoInfo)})();
        
    }, [assuntoInfo])
    
    return (
        <fieldset className="area_campo_assunto">
            <legend>
                <label htmlFor={"assunto"}>Assunto</label>
            </legend>
            <input type="text" id={"assunto"} name={"assunto"} placeholder="Digite o assunto do informativo" maxLength={100}
                autoComplete="off" onClick={() => { setExibiOpcoes(!exibiOpcoes); }} onChange={() => { setAssuntoInfo("") }} />
            {exibiOpcoes ? <div className="areaOpcoes">
                {listaOpcoes.map((opcao, index) => (<a href="" className="opcaoInformativo" value={opcao[1]} key={index} id={opcao[0]} onClick={(event) => { SelecionaTexto(event, opcao[1]) }}>{opcao[1]}</a>))}
            </div> : null}
        </fieldset>
    )
}

export function SelecaoMateria({ valorCampo = "", ID_materia = "" }) {
    const [exibiOpcoes, setExibiOpcoes] = useState(false);
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        document.getElementById("materia").value = valorCampo;
        document.getElementById("ID_materia").value = ID_materia;
        (async () => {
            const listaMaterias = await Busca_ListaMaterias();
            setMaterias(listaMaterias);
        })();
    }, [])

    function EscolhaID_materia(event, id) {
        event.preventDefault();
        document.getElementById("materia").value = document.getElementById(id).textContent;
        document.getElementById("ID_materia").value = id;
        setExibiOpcoes(!exibiOpcoes);
    }


    return (
        <fieldset className="area_campo_assunto">
            <legend>
                <label htmlFor={"materia"}>Materia</label>
            </legend>
            <input type="text" id={"materia"} name={"materia"} placeholder="Selecione a materia."
                autoComplete="off" onClick={() => { setExibiOpcoes(!exibiOpcoes) }} />
            <input type="hidden" name="ID_materia" id="ID_materia"/>
            {exibiOpcoes ? <div className="areaOpcoes">
                {materias.map((opcao, index) => (<a href="" className="opcaoInformativo"
                    value={opcao[1]} key={index} id={opcao[0]} onClick={(event) => { EscolhaID_materia(event, opcao[0]) }}>{opcao[1]}</a>)
                )}
            </div> : null}
        </fieldset>
    )
}

export function IntervaloTempo({ tipoInput, nomeCampo, id_campos, mensagensPlacerholder, valoresCampos = ["", ""] }) {
    useEffect(() => {
        document.getElementById(id_campos[0]).value = valoresCampos[0];
        document.getElementById(id_campos[1]).value = valoresCampos[1];
    }, []);

    return (
        <fieldset className="area_campo_form">
            <legend><label>{nomeCampo}</label></legend>
            <div className="linhaUnica">
                <label>
                    <em>{mensagensPlacerholder[0]}</em>
                    <input type={tipoInput} id={id_campos[0]} className="areaDate" required />
                </label>
                <label>
                    <em>{mensagensPlacerholder[1]}</em>
                    <input type={tipoInput} id={id_campos[1]} className="areaDate" required />
                </label>
            </div>
        </fieldset>
    )
}

export function CampoAnexo({ nomeCampo, id_campo, mensagemPlacerholder, valorCampo = "", tipoAnexo=""}) {
    useEffect(() => {
        document.getElementById(id_campo).value = valorCampo;
        const opcoes = document.querySelectorAll("option");
        switch(tipoAnexo){
            case "Link":
                opcoes[1].selected = true;
                break;
            case "Arquivo":
                opcoes[2].selected = true;
                break;
        }
    }, []);

    function Selecao_TipoAnexo(){
        const tipoAnexo = document.getElementById("tipoAnexo").value;
        switch(tipoAnexo){
            case "Link":
                document.getElementById(id_campo).type = "url";
                break;
            case "Arquivo":
                document.getElementById(id_campo).type = "file";
                break;
            default:
                document.getElementById(id_campo).type = "text";
                break;
        }
    }

    return (
        <fieldset className="area_campo_form">
            <legend><label htmlFor="tipoAnexo">{nomeCampo}</label></legend>
            <div className="linhaUnica">
                <select name="tipoAnexo" id="tipoAnexo" onChange={() => {Selecao_TipoAnexo()}}>
                    <option value="">Tipo</option> 
                    <option value="Link">Link</option>
                    <option value="Arquivo">Arquivo</option>
                </select>
                <input type="text" name={id_campo} id={id_campo} placeholder={mensagemPlacerholder} autoComplete="off" />
            </div>
        </fieldset>
    )
}
