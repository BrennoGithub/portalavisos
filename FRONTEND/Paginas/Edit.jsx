import {CampoAnexo, CampoTexto, TextoSelecao, Campo, DoisCampos, IntervaloTempo} from "../Compornentes/Campos.jsx";
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import {useState, useEffect} from "react"
import {GET, PUT} from "../static/js/requisicaoHTTP.js"
import {dadosForm} from "../static/js/form_informativos.js"
import "../static/css/estilo_login.css";
import "../static/css/estilo_global.css";
import "../static/css/estilo_formInformativos.css"

function Edit({ID_informativo}){
    const [form, setForm] = useState("null");
    const [assuntoForm, setAssuntoForm] = useState("");

    useEffect(() => {
        async function BuscaInformativo(ID) {
            const info = await GET(`${ID}`)
            if ("mensagemServidor" in info){
                alert(informativo["mensagemServidor"]);

            } else{
                return info;
            }
        };

        const informativo = BuscaInformativo(ID_informativo);

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
                setAssuntoForm(informativo["assunto"]);
                break;
        }

    }, []);

    async function SubmitForm(event, tipoForm){
        event.preventDefault();
        let dadosForm = {}
        switch (tipoForm){
            case "": 
                break;
            case "": 
                break;
            case "": 
                break;
            default: 
                break;
        }
        await PUT("", dadosForm);
    };

    return (
        <>
            <BarraLateral liderTurma={true} nomeUsuario={"Júlio César"}/>
            <Cabecalho/>
            <Corpo titulo={Edição}>
                <form className="formAviso" onSubmit={async (event) => {SubmitForm(event, assuntoForm)}}>
                    {form}
                </form>
            </Corpo>
        </>
    )
}

export default Edit;