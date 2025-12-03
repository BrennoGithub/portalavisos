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


    return ( //ATUALIZAÇÃO DOS DADOS DO FORM
        <>
        <BarraLateral  liderTurma={true} nomeUsuario={"Júlio César"}/>
        <Cabecalho/>
        <Corpo titulo={"Formulario"}>
            <form className="formAviso">
                <TextoSelecao listaOpcoes={[[1,"Avaliação"],[2,"Evento"],[3,"Material Didatico"]]} nomeCampo="Assunto" mensagemPlacerholder="Digite o assunto do informativo" id_campo="assunto" funcaoSelecao={TipoForm}/>
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