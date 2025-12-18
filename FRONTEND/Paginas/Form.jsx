import {CampoAnexo, CampoTexto, TextoSelecao, Campo, DoisCampos, IntervaloTempo} from "../Compornentes/Campos.jsx";
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {POST} from "../js/requisicaoHTTP.js"
import {dadosForm} from "../js/form_informativos.js"
import "../css/estilo_login.css";
import "../css/estilo_global.css";
import "../css/estilo_formInformativos.css"

function Form({dadosUsuario}){
    const [dadosAdicionais, setDadosAdicionais] = useState(null)
    const navigate = useNavigate();

    function TipoForm(tipo){
        switch (tipo){
            case "Avaliação":
                setDadosAdicionais(<>
                    <Campo nomeCampo="Tipo Avaliação" id_campo="tipoAvaliacao" 
                        mensagemPlacerholder="Ex.: Prova, seminario, lista de exercisios, etc." obrigatorio={true}/>
                    <DoisCampos  nomesCampos={["Materia", "Assunto da Avaliação"]}  id_campos={["materia", "assuntoAvaliacao"]}
                        mensagensPlacerholder={["Materia da avaliação", "Assunto da avaliação"]}/>
                    <DoisCampos tiposInput={["date", "time"]} id_campos={["dataAvaliacao", "horaAvaliacao"]} nomesCampos={["Dia da Avaliação", "Hora da Avaliação"]}/>
                </>)
                break;

            case "Evento":
                setDadosAdicionais(<>
                    <Campo nomeCampo="Nome do Evento" id_campo="nomeEvento" 
                        mensagemPlacerholder="Nome do evento" obrigatorio={true}/>
                    <IntervaloTempo tipoInput="date" nomeCampo="Dias do Evento" id_campos={["dataInicial_Evento", "dataFinal_Evento"]}
                        mensagensPlacerholder={["Inicio:", "Fim:"]}/>
                    <IntervaloTempo tipoInput="time" nomeCampo="Horario do Evento" id_campos={["horaInicial_Evento", "horaFinal_Evento"]}
                        mensagensPlacerholder={["Inicio:", "Fim:"]}/>
                </>)
                break;

            case "Material Didatico":
                setDadosAdicionais(<>
                    <DoisCampos nomesCampos={["Materia", "Assunto do Material"]} id_campos={["materia", "assuntoMaterial"]}
                        mensagensPlacerholder={["Materia", "Assunto do Material Didatico"]}/>
                </>)
                break;

            default:
                setDadosAdicionais(null)
                break;
        }
    }

    async function CriarInfo(event){
        event.preventDefault();
        const assunto = document.getElementById("assunto").value;
        const Formulario = dadosForm(assunto);
        const RespostaServ = await POST("http://localhost:5000/POST/informativos", Formulario);
        RespostaServ["informativoCriado"] && "informativoCriado" in RespostaServ ? navigate("/") : 
            ("mensagemServidor" in RespostaServ ? alert(RespostaServ["mensagemServidor"]) : alert("Erro na criação de informativo"))

    }


    return (<>
        <BarraLateral dadosUsuario={dadosUsuario}/>
        <Cabecalho/>
        <Corpo titulo={"Formulario"}>
            <form className="formAviso" onSubmit={async (event) => {CriarInfo(event)}}>
                <TextoSelecao listaOpcoes={[[1,"Avaliação"],[2,"Evento"],[3,"Material Didatico"]]} nomeCampo="Assunto" mensagemPlacerholder="Digite o assunto do informativo" id_campo="assunto" funcaoSelecao={TipoForm}/>
                {dadosAdicionais}
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link"/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true}/>
                <button type="submit" id="criaAviso" className="botao_campo_form">Criar</button>
            </form>
        </Corpo>
    </>)
}

export default Form;