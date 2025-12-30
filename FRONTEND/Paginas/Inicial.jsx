import {useState, useEffect} from "react"
import {GET} from "../js/requisicaoHTTP.js"
import {FormataData} from "../js/datas_informativos.js"
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import Card from "../Compornentes/Card.jsx"
import Carregando from "../Compornentes/Carregando.jsx"


function Inicial({info="", tituloSessao="Mural", objetoUsuario}){
    const [informativos, setInformativos] = useState([])
    const [carregando, setCarregando] = useState(true)

    function CarregandoInfo({carregando, children}){
        if (carregando){
            return <Carregando/>
        } else{
            return children
        }

    }

    useEffect(() => {
        let listaInformativos
        async function BuscaInformativo(tipoInfo){
            switch (info){
                case "avaliacoes":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao");
                    FormataData(listaInformativos, "dataAvaliacao");
                    setInformativos(listaInformativos);
                    break;
    
                case "eventos":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao");
                    FormataData(listaInformativos, "data_FinalEvento");
                    FormataData(listaInformativos, "data_InicioEvento");
                    setInformativos(listaInformativos);
                    break;
    
                case "materiais":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao");
                    setInformativos(listaInformativos);
                    break;
    
                case "avisos":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao");
                    setInformativos(listaInformativos);
                    break;
    
                default:
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao");
                    setInformativos(listaInformativos);
                    break;
            }
            setCarregando(false)
        };

        BuscaInformativo(info);

    }, [info, objetoUsuario, carregando]);
    

    return (
        <>
            <BarraLateral dadosUsuario={objetoUsuario}/>
            <Cabecalho/>
            <Corpo titulo={tituloSessao}>
                <CarregandoInfo carregando={carregando}>
                    {informativos.map((info, index) => (<Card objetoInfo={info} exibiEdit={true} key={index}/>))}
                </CarregandoInfo>
            </Corpo>
        </>
    )
}

export default Inicial;