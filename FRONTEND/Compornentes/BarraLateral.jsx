import { useNavigate } from "react-router-dom"
import { closeNav, clickFecha } from "../js/barra_lateral.js"
import {POST} from "../js/requisicaoHTTP.js"
import "../css/estilo_barraLateral.css"
import "../css/estilo_Informativos.css"
import fechar from "../icones/Fechar_preto.svg"
import criar from "../icones/Adicao_branco.svg"
import Mural from "../icones/Inicial_preto.svg"
import Aviso from "../icones/Aviso_preto.svg"
import Avaliacao from "../icones/Avaliacao_preto.svg"
import Evento from "../icones/Evento_preto.svg"
import Material from "../icones/Material_preto.svg"
import Sair from "../icones/Logout.svg"

function SessaoBarra({icone, descricaoIcone, nomeSessao, rotaAPI, Deslogar=false}){
    const navigate = useNavigate();

    async function Navegacao(event){
        event.preventDefault()
        if(Deslogar){
            sessaoLimpa = await POST("http://localhost:5000/logout", {"logout": true});
            sessaoLimpa["deslogado"] && "deslogado" in sessaoLimpa ? navigate("http://localhost:5173/") : alert("Erro no desloge")
        } else{
            navigate(rotaAPI);
            clickFecha();
        }
    }


    return (
        <a href="" className={Deslogar ? "deslogar" : "sessao"} onClick={async (event) => {Navegacao(event)}}>
            <img src={icone} alt={descricaoIcone} className="icone"/>
            <span className={Deslogar ? "textoDeslogar" : "textoSessao"}
                onClick={(event) => {Deslogar(event)}}>{nomeSessao}</span>
        </a>
    )
}


function BarraLateral({nomeUsuario, tipoUsuario="", liderTurma="False"}){
    const navigate = useNavigate()
    return (
        <nav id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={() => {closeNav()}}>
                <img src={fechar} alt="Icone de fechar" className="icon_fecha"/>
            </a>
            <a>{nomeUsuario}</a>
            {tipoUsuario === "professor" || liderTurma === "True" ? <img src={criar} alt="Icone de adição" className="icon_cria" onClick={() => {navigate("/form")}}></img> : null}
                <hr/>
            <SessaoBarra nomeSessao="Mural" descricaoIcone={"Icone Inicial"} icone={Mural} rotaAPI="http://localhost:5173/"/>
            <SessaoBarra nomeSessao="Avisos" descricaoIcone={"Icone Avisos"} icone={Aviso}  rotaAPI="http://localhost:5173/avisos"/>
            <SessaoBarra nomeSessao="Avaliações" descricaoIcone={"Icone Avaliação"} icone={Avaliacao}  rotaAPI="http://localhost:5173/avaliacoes"/>
            <SessaoBarra nomeSessao="Eventos" descricaoIcone={"Icone Eventos"} icone={Evento}  rotaAPI="http://localhost:5173/eventos"/>
            <SessaoBarra nomeSessao="Materiais Didaticos" descricaoIcone={"Icone Material"} icone={Material}  rotaAPI="http://localhost:5173/materiais"/>
            <SessaoBarra nomeSessao="Sair" descricaoIcone={"Icone Deslogar"} icone={Sair}  rotaAPI="http://localhost:5173/" Deslogar={true}/>
        </nav>
    )
}

export default BarraLateral;