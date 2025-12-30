import { useNavigate } from "react-router-dom"
import { DELETE } from "../js/requisicaoHTTP"
import "../css/estilo_Informativos.css"
import Delete from "../icones/Delete.svg"
import Edit from "../icones/Edit.svg"

function Card({ objetoInfo, exibiEdit }) {
    const navigate = useNavigate();
    let estiloTitulo
    let estiloCorpo
    let Titulo
    let Texto
    switch (objetoInfo["assunto"]) {
        case "Avaliação":
            estiloTitulo = "verde_1"
            estiloCorpo = "verde_2"
            Titulo = objetoInfo["tipoAvaliacao"]
            Texto = (<>
                <div>
                    <strong>Assunto:</strong> {objetoInfo["assuntoAvaliacao"]}
                </div>
                <div>
                    <strong>Horario:</strong> <em>{objetoInfo["dataAvaliacao"]} - {objetoInfo["horaAvaliacao"]}</em>
                </div>
                <br />
                {objetoInfo["mensagem"]}
            </>)
            break;

        case "Evento":
            estiloTitulo = "roxo_1"
            estiloCorpo = "roxo_2"
            Titulo = objetoInfo["nomeEvento"]
            Texto = (<>
                <div>
                    {objetoInfo['data_InicioEvento'] === objetoInfo['data_FinalEvento'] ?
                        (<><strong>Dia:</strong> <em>{objetoInfo['data_InicioEvento']}</em></>)
                        : (<><strong>Dias:</strong> <em>{objetoInfo['data_InicioEvento']} a {objetoInfo['data_FinalEvento']}</em></>)}

                </div>
                <div>
                    <strong>Horário:</strong> {objetoInfo['hora_InicioEvento'] === objetoInfo['hora_FinalEvento'] ?
                        (<><em>{objetoInfo['hora_InicioEvento']}</em></>)
                        : (<><em>{objetoInfo['hora_InicioEvento']} - {objetoInfo['hora_FinalEvento']}</em></>)}
                </div>
                <br />
                {objetoInfo["mensagem"]}
            </>)
            break;

        case "Material Didatico":
            estiloTitulo = "laranja_1"
            estiloCorpo = "laranja_2"
            Titulo = objetoInfo["materia"]
            Texto = (<>
                <div>
                    <strong>Assunto:</strong> {objetoInfo['assuntoMaterial']}
                </div>
                <br />
                {objetoInfo["mensagem"]}
            </>)
            break;

        default:
            estiloTitulo = "azul_1"
            estiloCorpo = "azul_2"
            Titulo = objetoInfo["assunto"]
            Texto = objetoInfo["mensagem"]
            break;
    }

    async function DeleteInfo(ID) {
        try {
            const RespostaServ = await DELETE(`http://localhost:5000/DELETE/informativos/${ID}`);
            if ("mensagemServidor" in RespostaServ) {
                alert(RespostaServ["mensagemServidor"])

            } else if (RespostaServ["informativoDeletado"] && "informativoDeletado" in RespostaServ) {
                alert("Informativo deletado com sucesso")
                window.location.reload();
            }

        } catch (error) {
            alert(`Erro na exclusão de informativo: ${error}`)
        }
    }

    return (
        <div className="estilo_aviso">
            <div className={`segunda_area  ${estiloTitulo}`}>{Titulo}</div>
            <div className={`terceira_area  ${estiloCorpo}`}>
                {Texto}
                <br />
                {exibiEdit ?
                    <div className="blocoFinal">
                        <div className="botoesEdit">
                            <img src={Delete} alt="Icone Delete" className="icone_delete" onClick={() => { DeleteInfo(objetoInfo["ID_informativo"]) }} />
                            <img src={Edit} alt="Icone Edit" className="icone_delete"
                                onClick={() => { navigate(`/informativos/${objetoInfo["ID_informativo"]}`) }} />
                        </div>
                        <div className="dataCriacao">{objetoInfo["dataCriacao"]}</div>
                    </div> :
                    <div className="blocoFinal">
                        <div className="dataCriacao">{objetoInfo["dataCriacao"]}</div>
                    </div>}
            </div>
        </div>
    )
}

export default Card;