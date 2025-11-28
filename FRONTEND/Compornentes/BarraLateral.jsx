import { useNavigate } from "react-router-dom"
import { closeNav, clickFecha } from "../static/js/barra_lateral.js"
import "../static/css/estilo_barraLateral.css"
import "../static/css/estilo_Informativos.css"
import fechar from "../static/icones/Fechar_preto.svg"
import criar from "../static/icones/Adicao_branco.svg"
import Mural from "../static/icones/Inicial_preto.svg"
import Aviso from "../static/icones/Aviso_preto.svg"
import Avaliacao from "../static/icones/Avaliacao_preto.svg"
import Evento from "../static/icones/Evento_preto.svg"
import Material from "../static/icones/Material_preto.svg"
import Sair from "../static/icones/Logout.svg"

function SessaoBarra({icone, descricaoIcone, nomeSessao, rotaAPI, Deslogar=false}){
    const navigate = useNavigate();

    function Navegacao(event){
        event.preventDefault()
        navigate(rotaAPI);
        clickFecha();
    }

    return (
        <a href="" className={Deslogar ? "deslogar" : "sessao"} onClick={Navegacao}>
            <img src={icone} alt={descricaoIcone} className="icone"/>
            <span className={Deslogar ? "textoDeslogar" : "textoSessao"}>{nomeSessao}</span>
        </a>
    )
}

function BarraLateral({nomeUsuario, tipoUsuario, liderTurma}){
    const navigate = useNavigate()
    return (
        <nav id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={() => {closeNav()}}>
                <img src={fechar} alt="Icone de fechar" className="icon_fecha"/>
            </a>
            <a>{nomeUsuario}</a>
            {tipoUsuario === "professor" || liderTurma ? <img src={criar} alt="Icone de adição" className="icon_cria" onClick={() => {navigate("/form")}}></img> : null}
                <hr/>
            <SessaoBarra nomeSessao="Mural" descricaoIcone={"Icone Inicial"} icone={Mural} rotaAPI="/"/>
            <SessaoBarra nomeSessao="Avisos" descricaoIcone={"Icone Avisos"} icone={Aviso}  rotaAPI="/avisos"/>
            <SessaoBarra nomeSessao="Avaliações" descricaoIcone={"Icone Avaliação"} icone={Avaliacao}  rotaAPI="/avaliacoes"/>
            <SessaoBarra nomeSessao="Eventos" descricaoIcone={"Icone Eventos"} icone={Evento}  rotaAPI="/eventos"/>
            <SessaoBarra nomeSessao="Materiais Didaticos" descricaoIcone={"Icone Material"} icone={Material}  rotaAPI="/materiais"/>
            <SessaoBarra nomeSessao="Sair" descricaoIcone={"Icone Deslogar"} icone={Sair}  rotaAPI="/" Deslogar={true}/>
        </nav>
    )
}

export default BarraLateral;