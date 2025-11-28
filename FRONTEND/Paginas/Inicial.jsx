import {useState, useEffect} from "react"
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import Card from "../Compornentes/Card.jsx"


function Inicial({info="Mural", tituloSessao="Mural"}){
    const [informativos, setInformativos] = useState([])

    useEffect(() => {
        switch (info){
            case "avaliacoes":
                setInformativos([{"tipo": "avaliacao", "titulo": info, "texto": "mundo"}])
                break;
            case "eventos":
                setInformativos([{"tipo": "evento", "titulo": info, "texto": "mundo"}])
                break;
            case "materiais":
                setInformativos([{"tipo": "material", "titulo": info, "texto": "mundo"}])
                break;
            case "avisos":
                setInformativos([{"tipo": "aviso", "titulo": info, "texto": "mundo"}])
                break;
            default:
                setInformativos([{"tipo": "", "titulo": info, "texto": "mundo"}, 
                    {"tipo": "avaliacao", "titulo": info, "texto": "mundo"},
                    {"tipo": "evento", "titulo": info, "texto": "mundo"},
                    {"tipo": "material", "titulo": info, "texto": "mundo"}, 
                    {"tipo": "aviso", "titulo": info, "texto": "mundo"}
                ])
                break;
        }
    }, [info])

    return (
        <>
            <BarraLateral liderTurma={true} nomeUsuario={"Júlio César"}/>
            <Cabecalho/>
            <Corpo titulo={tituloSessao}>
                {informativos.map((info, index) => (<Card tipoInfo={info["tipo"]} titulo={info["titulo"]} texto={info["texto"]} exibiEdit={true} key={index}/>))}
            </Corpo>
        </>
    )
}

export default Inicial;