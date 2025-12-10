import {CampoAnexo, CampoTexto, TextoSelecao, Campo, DoisCampos, IntervaloTempo} from "../Compornentes/Campos.jsx";
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {GET, PUT} from "../js/requisicaoHTTP.js"
import {dadosForm} from "../js/form_informativos.js"
import "../css/estilo_login.css";
import "../css/estilo_global.css";
import "../css/estilo_formInformativos.css"

function Edit({dadosUsuario}){
    const [form, setForm] = useState(null);
    const [informativo, setInformativo] = useState({})
    const [assuntoForm, setAssuntoForm] = useState("");
    const { id } = useParams();

    useEffect(() => {
        async function BuscaInformativo() {
            const info = await GET(`http://localhost:5000/informativos/${id}`)
            if ("mensagemServidor" in info){
                alert(informativo["mensagemServidor"]);

            } else{
                return info;
            }
        };

        setInformativo(BuscaInformativo());

        switch (informativo["assunto"]){
            case "Avaliação":
                setForm(<>
                <Campo nomeCampo="Tipo Avaliação" id_campo="tipoAvaliacao" 
                    mensagemPlacerholder="Ex.: Prova, seminario, lista de exercisios, etc." 
                    obrigatorio={true} valorCampo={informativo["tipoAvaliacao"]}/>
                <DoisCampos  nomesCampos={["Materia", "Assunto da Avaliação"]}  id_campos={["materia", "assuntoAvaliacao"]}
                    mensagensPlacerholder={["Materia da avaliação", "Assunto da avaliação"]} 
                    valoresCampos={[informativo["materia"], informativo["assuntoAvaliacao"]]}/>
                <DoisCampos tiposInput={["date", "time"]} id_campos={["dataAvaliacao", "horaAvaliacao"]}
                    nomesCampos={["Dia da Avaliação", "Hora da Avaliação"]} 
                    valoresCampos={[informativo["dataAvaliacao"], informativo["horaAvaliacao"]]}/>
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link" valorCampo={"ANEXO"}/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true} valorCampo={informativo["mensagem"]}/>
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;
            
            case "Evento":
                setForm(<>
                <Campo nomeCampo="Nome do Evento" id_campo="nomeEvento" 
                    mensagemPlacerholder="Nome do evento" obrigatorio={true}/>
                <IntervaloTempo tipoInput="date" nomeCampo="Dias do Evento" id_campos={["dataInicial_Evento", "dataFinal_Evento"]}
                    mensagensPlacerholder={["Inicio:", "Fim:"]} valoresCampos={[informativo["dataInicial_Evento"], informativo["dataFinal_Evento"]]}/>
                <IntervaloTempo tipoInput="time" nomeCampo="Horario do Evento" id_campos={["horaInicial_Evento", "horaFinal_Evento"]}
                    mensagensPlacerholder={["Inicio:", "Fim:"]} valoresCampos={[informativo["horaInicial_Evento"], informativo["horaFinal_Evento"]]}/>
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link" valorCampo={"ANEXO"}/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true} valorCampo={informativo["mensagem"]}/>
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;

            case "Material Didatico":
                setForm(<>
                <DoisCampos nomesCampos={["Materia", "Assunto do Material"]} id_campos={["materia", "assuntoMaterial"]}
                    mensagensPlacerholder={["Materia", "Assunto do Material Didatico"]} valoresCampos={[informativo["materia"], informativo["assuntoMaterial"]]}/>
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link" valorCampo={"ANEXO"}/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true} valorCampo={informativo["mensagem"]}/>
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;

            default:
                setForm(<>
                <Campo nomeCampo="Assunto" mensagemPlacerholder="Digite o assunto do informativo" id_campo="assunto" valorCampo={informativo["assunto"]}/>
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link" valorCampo={"ANEXO"}/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true} valorCampo={informativo["mensagem"]}/>
                </>)
                setAssuntoForm("");
                break;
        }

    }, [id]);

    async function SubmitForm(event, tipoForm){
        event.preventDefault();
        const assunto = tipoForm != "" ? assuntoForm : document.getElementById("assunto").value;
        const dadosEdit = dadosForm(assunto)
        const RespostaServ = await PUT(`http://localhost:5000/PUT/informativos/${informativo["ID_informativo"]}`, dadosEdit);
        RespostaServ["informativoEditado"] && "informativoEditado" in RespostaServ ? navigate("http://localhost:5173/") : 
            ("mensagemServidor" in RespostaServ ? alert(RespostaServ["mensagemServidor"]) : alert("Erro na edição de informativo"))
    };

    return (
        <>
            <BarraLateral liderTurma={dadosUsuario["liderTurma"]} nomeUsuario={dadosUsuario["nomeUsuario"]} tipoUsuario={dadosUsuario["tipoUsuario"]}/>
            <Cabecalho/>
            <Corpo titulo={Edição}>
                <form className="formAviso" onSubmit={async (event) => {SubmitForm(event, assuntoForm)}}>
                    {form}
                </form>
                <button type="submit" id="criaAviso" className="botao_campo_form">Editar</button>
            </Corpo>
        </>
    )
}

export default Edit;