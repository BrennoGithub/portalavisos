import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import Card from "../Compornentes/Card.jsx"


function Inicial({info="", tituloSessao="Mural"}){
    let listaInfo
    switch (info){
        case "avaliacoes":
            listaInfo = [{"titulo": info, "texto": "mundo"}, {"titulo": info, "texto": "mundo"}]
            break;
        case "eventos":
            listaInfo = [{"titulo": info, "texto": "mundo"}, {"titulo": info, "texto": "mundo"}]
            break;
        case "materiais":
            listaInfo = [{"titulo": info, "texto": "mundo"}, {"titulo": info, "texto": "mundo"}]
            break;
        default:
            listaInfo = [{"titulo": "ola", "texto": "mundo"}, {"titulo": "ola", "texto": "mundo"}]
            break;
    }

    return (
        <>
            <BarraLateral liderTurma={true} nomeUsuario={"Júlio César"}/>
            <Cabecalho/>
            <Corpo titulo={tituloSessao}>
                {listaInfo.map((info, index) => (<Card titulo={info["titulo"]} texto={info["texto"]} exibiEdit={false} key={index}/>))}
            </Corpo>
        </>
    )
}

export default Inicial;