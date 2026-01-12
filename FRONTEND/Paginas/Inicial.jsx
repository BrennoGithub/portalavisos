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
                    FormataData(listaInformativos, "dataCriacao", "Data");
                    FormataData(listaInformativos, "horaCriacao", "Hora");
                    FormataData(listaInformativos, "dataAvaliacao", "Data");
                    FormataData(listaInformativos, "horaAvaliacao", "Hora");
                    setInformativos(listaInformativos);
                    break;
    
                case "eventos":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao", "Data");
                    FormataData(listaInformativos, "horaCriacao", "Hora");
                    FormataData(listaInformativos, "data_FinalEvento", "Data");
                    FormataData(listaInformativos, "data_InicioEvento", "Data");
                    FormataData(listaInformativos, "hora_FinalEvento", "Hora");
                    FormataData(listaInformativos, "hora_InicioEvento", "Hora");
                    setInformativos(listaInformativos);
                    break;
    
                case "materiais":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao", "Data");
                    FormataData(listaInformativos, "horaCriacao", "Hora");
                    setInformativos(listaInformativos);
                    break;
    
                case "avisos":
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao", "Data");
                    FormataData(listaInformativos, "horaCriacao", "Hora");
                    setInformativos(listaInformativos);
                    break;
    
                default:
                    listaInformativos = await GET(`http://localhost:5000/informativos/${tipoInfo}`);
                    FormataData(listaInformativos, "dataCriacao", "Data");
                    FormataData(listaInformativos, "horaCriacao", "Hora");
                    FormataData(listaInformativos, "dataAvaliacao", "Data");
                    FormataData(listaInformativos, "horaAvaliacao", "Hora");
                    FormataData(listaInformativos, "data_InicioEvento", "Data");
                    FormataData(listaInformativos, "data_FinalEvento", "Data");
                    FormataData(listaInformativos, "hora_FinalEvento", "Hora");
                    FormataData(listaInformativos, "hora_InicioEvento", "Hora");
                    setInformativos(listaInformativos);
                    break;
            }
            setCarregando(false)
        };

        BuscaInformativo(info);

    }, [info, objetoUsuario, carregando]);
    

    return (
        <>
            <BarraLateral dadosUsuario={objetoUsuario} nomePagina={tituloSessao}/>
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