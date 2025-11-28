import "../static/css/estilo_Informativos.css"

function Corpo({children, titulo=""}){
    return (
        <div className="exibicaoInformativos">
            <div className="areaTitulo"> 
                <h2>{titulo}</h2> 
            </div> 
            <div className="areaCorpo">{children}</div>
        </div>
    )
}

export default Corpo