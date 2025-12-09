import BarraLateral from "../Compornentes/BarraLateral.jsx"
import Corpo from "../Compornentes/Corpo.jsx"
import {useState, useEffect} from "react"
import {GET, PUT} from "../static/js/requisicaoHTTP.js"
import "../static/css/estilo_login.css";
import "../static/css/estilo_global.css";
import "../static/css/estilo_formInformativos.css"

function Edit({ID_informativo}){
    const [form, setForm] = useState(null);
    const [assuntoForm, setAssuntoForm] = useState("");

    useEffect(() => {
        async function BuscaInformativo(ID) {
            const info = await GET(`${ID}`)
            if ("mensagemServidor" in info){
                alert(informativo["mensagemServidor"]);

            } else{
                return info;
            }
        };

        const informativo = BuscaInformativo(ID_informativo);

        switch (informativo["assunto"]){
            case "Avaliação":
                setForm(<>
                Avaliação
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;
            
            case "Evento":
                setForm(<>
                Evento
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;

            case "Material Didatico":
                setForm(<>
                Meterial
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;

            default:
                setForm(<>
                Aviso
                </>)
                setAssuntoForm(informativo["assunto"]);
                break;
        }

    }, []);

    async function SubmitForm(event, tipoForm){
        event.preventDefault();
        let dadosForm = {}
        switch (tipoForm){
            case "": 
                break;
            case "": 
                break;
            case "": 
                break;
            default: 
                break;
        }
        await PUT("", dadosForm);
    };

    return (
        <>
            <BarraLateral liderTurma={true} nomeUsuario={"Júlio César"}/>
            <Cabecalho/>
            <Corpo titulo={Edição}>
                <form className="formAviso" onSubmit={async (event) => {SubmitForm(event, assuntoForm)}}>
                    {form}
                </form>
            </Corpo>
        </>
    )
}

export default Edit;