import { CampoAnexo, CampoTexto, Campo, DoisCampos, IntervaloTempo } from "../Compornentes/Campos.jsx";
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Carregando from "../Compornentes/Carregando.jsx"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GET, PUT } from "../js/requisicaoHTTP.js"
import { dadosForm } from "../js/form_informativos.js"
import "../css/estilo_login.css";
import "../css/estilo_global.css";
import "../css/estilo_formInformativos.css"

function CarregandoForm({ carregando, children }) {
    if (carregando) {
        return <Carregando />
    } else {
        return children
    }
}

//COCETAR FUNÇÃO DE SUBMIT DE ENVIO DE INFORMATIVO EDITADO.
function Edit({ dadosUsuario }) {
    const [informativo, setInformativo] = useState({})
    const [assuntoForm, setAssunto] = useState("");
    const [carregando, setCarregando] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function BuscaInformativo() {
            try {
                const info = await GET(`http://localhost:5000/informativos/${id}`)
                if ("mensagemServidor" in info) {
                    alert(info["mensagemServidor"]);

                } else {
                    setInformativo(info);
                    setAssunto(info["assunto"]);
                    setCarregando(false);
                    
                }
                
            } catch (error) {
                alert(`Erro na busca de informativo: ${error}`)
            }
        };
        
        BuscaInformativo();

    }, [id]);


    async function SubmitForm(event) {
        event.preventDefault();
        let dados = null;
        
        if(!["Avaliação", "Evento", "Material Didatico"].includes(assuntoForm)){
            const Assunto = String(document.getElementById("assunto").value);
            dados = dadosForm(Assunto);
        } else {
            dados = dadosForm(assuntoForm);
        }

        const RespostaServ = await PUT(`http://localhost:5000/PUT/informativos/${id}`, dados);
        if ("mensagemServidor" in RespostaServ) {
            alert(RespostaServ["mensagemServidor"]);

        } else if (RespostaServ["informativoEditado"] && "informativoEditado" in RespostaServ) {
            alert("Informativo editado com sucesso");
            navigate("/");
        }
    };

    return (
        <>
            <BarraLateral dadosUsuario={dadosUsuario} />
            <Cabecalho />
            <Corpo titulo={"Edição de informativo"}>
                <CarregandoForm carregando={carregando}>
                    <form className="formAviso" onSubmit={async (event) => { SubmitForm(event) }}>
                        {assuntoForm === "Avaliação" ? (<>
                            <Campo nomeCampo="Tipo Avaliação" id_campo="tipoAvaliacao"
                                mensagemPlacerholder="Ex.: Prova, seminario, lista de exercisios, etc." valorCampo={informativo["tipoAvaliacao"]} obrigatorio={true} />
                            <DoisCampos nomesCampos={["Materia", "Assunto da Avaliação"]} id_campos={["materia", "assuntoAvaliacao"]}
                                mensagensPlacerholder={["Materia da avaliação", "Assunto da avaliação"]} valoresCampos={[informativo["materia"], informativo["assuntoAvaliacao"]]} />
                            <DoisCampos tiposInput={["date", "time"]} id_campos={["dataAvaliacao", "horaAvaliacao"]}
                                nomesCampos={["Dia da Avaliação", "Hora da Avaliação"]} valoresCampos={[informativo["dataAvaliacao"], informativo["horaAvaliacao"]]} />
                        </>) : null}

                        {assuntoForm === "Evento" ? (<>
                            <Campo nomeCampo="Nome do Evento" id_campo="nomeEvento"
                                mensagemPlacerholder="Nome do evento" obrigatorio={true} valorCampo={informativo["nomeEvento"]}/>
                            <IntervaloTempo tipoInput="date" nomeCampo="Dias do Evento" id_campos={["data_InicioEvento", "data_FinalEvento"]}
                                mensagensPlacerholder={["Inicio:", "Fim:"]} valoresCampos={[informativo["data_InicioEvento"], informativo["data_FinalEvento"]]} />
                            <IntervaloTempo tipoInput="time" nomeCampo="Horario do Evento" id_campos={["hora_InicioEvento", "hora_FinalEvento"]}
                                mensagensPlacerholder={["Inicio:", "Fim:"]} valoresCampos={[informativo["hora_InicioEvento"], informativo["hora_FinalEvento"]]} />
                        </>) : null}

                        {assuntoForm === "Material Didatico" ? (<>
                            <DoisCampos nomesCampos={["Materia", "Assunto do Material"]} id_campos={["materia", "assuntoMaterial"]}
                                mensagensPlacerholder={["Materia", "Assunto do Material Didatico"]} valoresCampos={[informativo["materia"], informativo["assuntoMaterial"]]} />
                        </>) : null}

                        {!["Avaliação", "Evento", "Material Didatico"].includes(assuntoForm) ? (<>
                            <Campo nomeCampo="Assunto" id_campo="assunto"
                                mensagemPlacerholder="Digite o assunto do informativo"
                                obrigatorio={true} valorCampo={assuntoForm} />
                        </>) : null}

                        <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link" />
                        <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true} valorCampo={informativo["mensagem"]} />
                        <button type="submit" id="criaAviso" className="botao_campo_form">Editar</button>
                    </form>
                </CarregandoForm>
            </Corpo>
        </>
    )
}

export default Edit;