import React from "react";
import "../static/css/estilo_login.css";

export function Campo({nomeCampo, tipoInput, id_campo, mensagemPlacerholder, obrigatorio}){
    const campoInput = obrigatorio ? 
        <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder} required/> : 
        <input type={tipoInput} id={id_campo} name={id_campo} placeholder={mensagemPlacerholder}/>

    return (
        <fieldset className="">
            <legend>
                <label htmlFor={id_campo}>{nomeCampo}</label>
            </legend>
            {campoInput}
        </fieldset>
    )
}

export function CampoTextoSelecionado(){
    return (
        <></>
    )
}

export function CamposDatatime(){
    return (
        <></>
    )
}
