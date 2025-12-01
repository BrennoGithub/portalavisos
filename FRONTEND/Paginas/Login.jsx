import { Campo } from "../Compornentes/Campos.jsx"
import {useNavigate} from "react-router-dom"
import {POST} from "../static/js/requisicaoHTTP.js"
import "../static/css/estilo_global.css";
import "../static/css/estilo_login.css";

function Login(){
    const navigate = useNavigate()
    async function EnvioLogin(event){
        event.preventDefault()
        const UsuarioMatricula = document.getElementById("matricula").value;
        const SenhaUsuario = document.getElementById("senha").value;
        const dadosLogin = {
            "matricula": UsuarioMatricula,
            "senha": SenhaUsuario
        }
        const RespostaLogin = await POST("http://localhost:5000/login", dadosLogin)
        RespostaLogin["login"] ? navigate("/") : null
    } //MELHORAR FUNÇÃO DE LOGIN

    return (
        <form id="loginForm" className="formLogin" onSubmit={async (event) => {EnvioLogin(event)}}>
            <h2>Login</h2> <hr/>
                <Campo nomeCampo="Matricula" tipoInput="text" id_campo="matricula" 
                    mensagemPlacerholder="Digite sua matricula" obrigatorio={true} className="area_campo_login area_matricula"/>
                <Campo nomeCampo="Senha" tipoInput="password" id_campo="senha" 
                    mensagemPlacerholder="Digite sua senha" obrigatorio={true} className="area_campo_login senha_turma"/>
                <button type="submit" className="botao_campo_login">ACESSAR</button>
        </form>
        
    )
}

export default Login;