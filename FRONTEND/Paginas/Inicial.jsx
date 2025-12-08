import {useState, useEffect} from "react"
import {GET} from "../static/js/requisicaoHTTP.js"
import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Cabecalho from "../Compornentes/Cabecalho.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import Card from "../Compornentes/Card.jsx"


function Inicial({info="", tituloSessao="Mural", objetoUsuario}){
    const [informativos, setInformativos] = useState([])

    function FormataData(lista, tipoData){
        lista.map(info => {
            let data = info[tipoData];
            data = data.split("-");
            let dia = data[2];
            let mes = data[1];
            let ano = data[0];
            info[tipoData] = `${dia}/${mes}/${ano}`})
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
        };

        BuscaInformativo(info);

    }, [info]);
    

    return (
        <>
            <BarraLateral liderTurma={objetoUsuario["liderTurma"]} nomeUsuario={objetoUsuario["nomeUsuario"]} tipoUsuario={objetoUsuario["tipoUsuario"]}/>
            <Cabecalho/>
            <Corpo titulo={tituloSessao}>
                {informativos.map((info, index) => (<Card objetoInfo={info} exibiEdit={true} key={index}/>))}
            </Corpo>
        </>
    )
}

export default Inicial;