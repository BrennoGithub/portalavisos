import React from "react";
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Corpo from "../Compornentes/Corpo.jsx"

function Edit(){
    return (
        <>
            <BarraLateral liderTurma={true} nomeUsuario={"Júlio César"}/>
            <Corpo titulo={tituloSessao}></Corpo>
        </>
    )
}

export default Edit;