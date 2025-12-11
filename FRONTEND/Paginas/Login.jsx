import { Campo } from "../Compornentes/Campos.jsx"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {POST} from "../js/requisicaoHTTP.js"
import "../css/estilo_global.css";
import "../css/estilo_login.css";


function Login({setLogado}){
    const [mensagemServidor, setMensagem] = useState(null);
    const navigate = useNavigate();

    async function SubmitLogin(event){
        event.preventDefault()
        const UsuarioMatricula = document.getElementById("matricula").value;
        const SenhaUsuario = document.getElementById("senha").value;
        const dadosLogin = {
            "matricula": UsuarioMatricula,
            "senha": SenhaUsuario
        }
        const RespostaLogin = await POST("http://localhost:5000/login", dadosLogin)
        if (RespostaLogin["login"]){
            setLogado(true)
            navigate("/")
        }else{
            setMensagem("Matricula ou senha incorreta.")
        }
    }

    return (
        <form id="loginForm" className="formLogin" onSubmit={async (event) => {SubmitLogin(event)}}>
            <h2>Login</h2> <hr/>
                <Campo nomeCampo="Matricula" id_campo="matricula" mensagemPlacerholder="Digite sua matricula" 
                    obrigatorio={true} className="area_campo_login area_matricula"/>
                <Campo nomeCampo="Senha" tipoInput="password" id_campo="senha" 
                    mensagemPlacerholder="Digite sua senha" obrigatorio={true} className="area_campo_login senha_turma"/>
                <div className="alertErro">{mensagemServidor}</div> 
                <button type="submit" className="botao_campo_login">ACESSAR</button>
        </form>
        
    )
}

export default Login;