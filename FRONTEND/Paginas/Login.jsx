import { Campo } from "../Compornentes/Campos.jsx"
import "../static/css/estilo_global.css";
import "../static/css/estilo_login.css";

function Login(){
    return (
        <form id="loginForm" className="formLogin">
            <h2>Login</h2> <hr/>
                <Campo nomeCampo="Matricula" tipoInput="text" id_campo="matricula" 
                    mensagemPlacerholder="Digite sua matricula" obrigatorio={true} className="area_campo_login area_matricula"/>
                <Campo nomeCampo="Senha" tipoInput="password" id_campo="senha" 
                    mensagemPlacerholder="Digite sua senha" obrigatorio={true} className="area_campo_login senha_turma"/>
                <button type="submit" className="botao_campo_login" onSubmit={() => {}}>ACESSAR</button>
        </form>
        
    )
}

export default Login;