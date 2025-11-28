import {useState} from "react"
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import {CampoAnexo, CampoTexto, TextoSelecao, Campo, DoisCampos, IntervaloTempo} from "../Compornentes/Campos.jsx";
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import "../static/css/estilo_login.css";
import "../static/css/estilo_global.css";
import "../static/css/estilo_formInformativos.css"

//RESOLVER O PROBLEMA DA EXIBIÇÃO DOS DADOS ADICIONAIS
function Form(){
    const [dadosAdicionais, setDadosAdicionais] = useState(null)

    function TipoForm(tipo){
        switch (tipo){
            case "Avaliação":
                setDadosAdicionais(<>
                    <Campo nomeCampo="Tipo Avaliação" id_campo="tipoAvaliacao" 
                        mensagemPlacerholder="Ex.: Prova, seminario, lista de exercisios, etc." obrigatorio={true}/>
                    <DoisCampos nomeCampo1="Materia" nomeCampo2="Assunto da Avaliação" id_campo1="materia" id_campo2="assuntoAvaliacao" 
                        mensagemPlacerholder1="Materia da avaliação" mensagemPlacerholder2="Assunto da avaliação"/>
                    <DoisCampos tipoInput1="date" tipoInput2="time" id_campo1={"dataAvaliacao"} id_campo2={"horaAvaliacao"} nomeCampo1={"Dia da Avaliação"} nomeCampo2={"Hora da Avaliação"}/>
                </>)
                break;

            case "Evento":
                setDadosAdicionais(<>
                    <Campo nomeCampo="Nome do Evento" id_campo="nomeEvento" 
                        mensagemPlacerholder="Nome do evento" obrigatorio={true}/>
                    <IntervaloTempo tipoInput="date" nomeCampo="Dias do Evento" id_campo1="dataInicial_Evento" id_campo2="dataFinal_Evento" 
                        mensagemPlacerholder1="Inicio:" mensagemPlacerholder2="Fim:"/>
                    <IntervaloTempo tipoInput="time" nomeCampo="Horario do Evento" id_campo1="horaInicial_Evento" id_campo2="horaFinal_Evento" 
                        mensagemPlacerholder1="Inicio:" mensagemPlacerholder2="Fim:"/>
                </>)
                break;

            case "Material Didatico":
                setDadosAdicionais(<>
                    <DoisCampos nomeCampo1="Materia" nomeCampo2="Assunto do Material" id_campo1="materia" id_campo2="assuntoMaterial" 
                        mensagemPlacerholder1="Materia" mensagemPlacerholder2="Assunto do Material Didatico"/>
                </>)
                break;

            default:
                setDadosAdicionais(null)
                break;
        }
    }


    return (
        <>
        <BarraLateral  liderTurma={true} nomeUsuario={"Júlio César"}/>
        <Cabecalho/>
        <Corpo titulo={"Formulario"}>
            <form className="formAviso">
                <TextoSelecao listaOpcoes={["Avaliação","Evento","Material Didatico"]} nomeCampo="Assunto" mensagemPlacerholder="Digite o assunto do informativo" id_campo="assunto" funcaoSelecao={TipoForm}/>
                {dadosAdicionais}
                <CampoAnexo nomeCampo="Anexo" id_campo="anexo" mensagemPlacerholder="Anexe um arquivo ou link"/>
                <CampoTexto nomeCampo={"Mensagem"} id_campo="mensagem" mensagemPlacerholder={"Digite sua mensagem"} obrigatorio={true}/>
                <button type="submit" id="criaAviso" className="botao_campo_form">Criar</button>
            </form>
        </Corpo>
        </>
    )
}

export default Form;