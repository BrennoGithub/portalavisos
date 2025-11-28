import "../static/css/estilo_Informativos.css"
import Delete from "../static/icones/Delete.svg"
import Edit from "../static/icones/Edit.svg"

function Card({tipoInfo, titulo, texto, exibiEdit}){
    let estiloTitulo
    let estiloCorpo
    switch (tipoInfo){
        case "avaliacao":
            estiloTitulo = "verde_1"
            estiloCorpo = "verde_2"
            break;
        case "evento":
            estiloTitulo = "roxo_1"
            estiloCorpo = "roxo_2"
            break;
        case "material":
            estiloTitulo = "laranja_1"
            estiloCorpo = "laranja_2"
            break;
        default:
            estiloTitulo = "azul_1"
            estiloCorpo = "azul_2"
            break;
    }

    return (
        <div className="estilo_aviso">
            <div className={`segunda_area  ${estiloTitulo}`}>{titulo}</div>
            <div className={`terceira_area  ${estiloCorpo}`}>
                {texto}
                <br/>
                {exibiEdit ? 
                <div className="blocoFinal">
                    <div class="botoesEdit">
                        <img src={Delete} alt="Icone Delete" className="icone_delete"/>
                        <img src={Edit} alt="Icone Edit" className="icone_delete"/>
                    </div>
                    <div className="dataCriacao">DD/MM/AAAA</div>
                </div> : 
                <div className="blocoFinal">
                    <div className="dataCriacao">DD/MM/AAAA</div>
                </div>}
            </div>
        </div>
    )
}

export default Card;