import menu from "../static/icones/Menu_branco.svg"
import {openNav} from "../static/js/barra_lateral.js"
import "../static/css/estilo_Informativos.css"

function Cabecalho(){
 return (
    <header className="cabeca_pagina">
        <div id="main" onClick={() => {openNav()}}>
            <img src={menu} alt="Icone de menu" className="icon_menu openbtn"/>
        </div>
        <h1>Portal Informativo</h1>
    </header>
 )
}

export default Cabecalho;