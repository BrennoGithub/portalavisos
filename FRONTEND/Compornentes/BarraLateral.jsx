import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { closeNav, clickFecha } from "../js/barra_lateral.js"
import { POST } from "../js/requisicaoHTTP.js"
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

function SessaoBarra({ icone, descricaoIcone, nomeSessao, rotaAPI, Deslogar = false, sessaoAtivada }) {
    const navigate = useNavigate();


    async function Navegacao(event) {
        event.preventDefault()
        if (Deslogar) {
            try {
                const connfirmarLogout = confirm("Deseja prosseguir com a ação de deslogar de sua conta?")
                if (connfirmarLogout) {
                    await POST("http://localhost:5000/logout", { "logout": true });
                    window.location.reload();
                }

            } catch (error) {
                alert(`Erro no deslogar na sessão: ${error}`);
            }

        } else {
            navigate(rotaAPI);
            sessaoAtivada(nomeSessao);
            clickFecha();
        }
    }

    return (
        <a href="" className={Deslogar ? "deslogar" : "sessao"} id={nomeSessao} onClick={async (event) => { Navegacao(event) }}>
            <img src={icone} alt={descricaoIcone} className="icone" />
            {Deslogar ? <span className="textoDeslogar" onClick={(event) => { Deslogar(event) }}>{nomeSessao}</span>
                : <span className="textoSessao">{nomeSessao}</span>}
        </a>
    )
}


function BarraLateral({ dadosUsuario, nomePagina = "Mural" }) {
    const [nomeUsuario, setNome] = useState("");
    const [liderTurma, setLider] = useState("False");
    const [tipoUsuario, setTipo] = useState("");
    const [sessao, setSessao] = useState(nomePagina);
    const navigate = useNavigate()

    useEffect(() => {
        setNome(dadosUsuario["nomeUsuario"])
        setTipo(dadosUsuario["tipoUsuario"])
        "liderTurma" in dadosUsuario ? setLider("True") : null
    }, [])

    useEffect(() => {
        const listaSessoes = document.querySelectorAll(".sessao");
        listaSessoes.forEach(iten => {
            iten.style.backgroundColor = "white";
        })
        document.getElementById(sessao).style.backgroundColor = "lightgray";
    }, [sessao])

    return (
        <nav id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={() => { closeNav() }}>
                <img src={fechar} alt="Icone de fechar" className="icon_fecha" />
            </a>
            <a>{nomeUsuario}</a>
            {tipoUsuario === "professor" || liderTurma === "True" ? <img src={criar} alt="Icone de adição" className="icon_cria" onClick={() => { navigate("/form") }}></img> : null}
            <hr />
            <SessaoBarra nomeSessao="Mural" descricaoIcone={"Icone Inicial"} icone={Mural} rotaAPI="http://localhost:5173/" sessaoAtivada={setSessao} />
            <SessaoBarra nomeSessao="Avisos" descricaoIcone={"Icone Avisos"} icone={Aviso} rotaAPI="http://localhost:5173/avisos" sessaoAtivada={setSessao} />
            <SessaoBarra nomeSessao="Avaliações" descricaoIcone={"Icone Avaliação"} icone={Avaliacao} rotaAPI="http://localhost:5173/avaliacoes" sessaoAtivada={setSessao} />
            <SessaoBarra nomeSessao="Eventos" descricaoIcone={"Icone Eventos"} icone={Evento} rotaAPI="http://localhost:5173/eventos" sessaoAtivada={setSessao} />
            <SessaoBarra nomeSessao="Materiais Didaticos" descricaoIcone={"Icone Material"} icone={Material} rotaAPI="http://localhost:5173/materiais" sessaoAtivada={setSessao} />
            <SessaoBarra nomeSessao="Sair" descricaoIcone={"Icone Deslogar"} icone={Sair} rotaAPI="http://localhost:5173/" Deslogar={true} />
        </nav>
    )
}

export default BarraLateral;