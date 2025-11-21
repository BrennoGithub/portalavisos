import React from "react";
import { useNavigate } from "react-router-dom"

function SessaoBarra({icone, descricaoIcone, nomeSessao, rotaAPI}){
    function Navegacao(rotaAPI){
        const navigate = useNavigate();
        navigate(rotaAPI);
    }

    return (
        <a href="" className="sessao" onClick={() => {Navegacao(rotaAPI)}}>
            <img src={icone} alt={descricaoIcone} className="icone"/>
            <span className="textoSessao">{nomeSessao}</span>
        </a>
    )
}

function BarraLateral({tipoUsuario, liderTurma}){
    const Sessoes = tipoUsuario === "professor" || liderTurma ? (<p></p>) : (<p></p>)
    return (
        <nav>

        </nav>
    )
}

export default BarraLateral;