import "../static/css/estilo_Informativos.css"
import Delete from "../static/icones/Delete.svg"
import Edit from "../static/icones/Edit.svg"

function Card({objetoInfo, exibiEdit}){
    let estiloTitulo
    let estiloCorpo
    let Titulo
    let Texto
    switch (objetoInfo["assunto"]){
        case "Avaliação":
            estiloTitulo = "verde_1"
            estiloCorpo = "verde_2"
            Titulo = objetoInfo["tipoAvaliacao"]
            Texto = (<>
                <strong>Assunto:</strong> {objetoInfo["assuntoAvaliacao"]} <br/>
                <strong>Horario:</strong> <em>{objetoInfo["dataAvaliacao"]} - {objetoInfo["horaAvaliacao"]}</em> <br/>
                {objetoInfo["mensagem"]}
            </>)
            break;

        case "Evento":
            estiloTitulo = "roxo_1"
            estiloCorpo = "roxo_2"
            Titulo = objetoInfo["nomeEvento"]
            Texto = (<>
                <strong>Dia(s):</strong> <em>{objetoInfo['data_InicioEvento']} a {objetoInfo['data_FinalEvento']}</em> <br/>
                <strong>Horário:</strong> <em>{objetoInfo['hora_InicioEvento']} - {objetoInfo['hora_FinalEvento']}</em> <br/>
                {objetoInfo["mensagem"]}
            </>)
            break;

        case "Material Didatico":
            estiloTitulo = "laranja_1"
            estiloCorpo = "laranja_2"
            Titulo = objetoInfo["materia"]
            Texto = (<>
                <strong>Assunto:</strong> {objetoInfo['assuntoMaterial']} <br/>
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

    return (
        <div className="estilo_aviso">
            <div className={`segunda_area  ${estiloTitulo}`}>{Titulo}</div>
            <div className={`terceira_area  ${estiloCorpo}`}>
                {Texto}
                <br/>
                {exibiEdit ? 
                <div className="blocoFinal">
                    <div class="botoesEdit">
                        <img src={Delete} alt="Icone Delete" className="icone_delete"/>
                        <img src={Edit} alt="Icone Edit" className="icone_delete"/>
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