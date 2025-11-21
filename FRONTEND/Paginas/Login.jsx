import React from "react";
import { Campo } from "../Compornentes/Campos.jsx"
import "../static/css/estilo_global.css";

function Login(){
    return (
        <form>
            <Campo nomeCampo="Matricula" tipoInput="text" id_campo="matricula" mensagemPlacerholder="Digite sua matricula" obrigatorio={true} className="area_campo_login"/>
            <Campo nomeCampo="Senha" tipoInput="password" id_campo="senha" mensagemPlacerholder="Digite sua senha" obrigatorio={true} className="area_campo_login"/>
            <button type="submit" className="" onSubmit={() => {}}>ACESSAR</button>
        </form>
    )
}

export default Login;