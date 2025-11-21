import React from "react";

function Card({assunto, mensagem}){
    const estiloInformativo = null
    return (
        <div style={estiloInformativo}>
            <div style={estiloInformativo}>{assunto}</div>
            <div style={estiloInformativo}>
                <div style={estiloInformativo}>{mensagem}</div>
                <div style={estiloInformativo}>Área edit</div>
            </div>
        </div>
    )
}

export default Card;