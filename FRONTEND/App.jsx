import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Login from "./Paginas/Login.jsx"
import Inicial from "./Paginas/Inicial.jsx"
import Form from "./Paginas/Form.jsx"
import Edit from "./Paginas/Edit.jsx"
import Carregando from "./Compornentes/Carregando.jsx"
import {GET} from "./js/requisicaoHTTP.js"
import "./css/estilo_global.css"
import "./css/estilo_Informativos.css"

function App() {
    const [logado, setLogado] = useState(false)
    const [carregando, setCarregando] = useState(true)
    const [dadosUsuario, setDadosUsuario] = useState({})

    function Verificacao({logado, carregando, children}){
        if(carregando){
            return <Carregando/>
        }

        if(logado){
            return children

        }else{
            return <Navigate to={"/login"} replace/>
        }
    }

    useEffect(() => {
        async function checkLogin(){
            try{
                const estaLogado = await GET("http://localhost:5000/");
                if("mensagemServidor" in estaLogado){
                    alert(estaLogado["mensagemServidor"])
                }else{
                    setDadosUsuario(estaLogado)
                    setLogado(estaLogado["login"])
                }
            } catch (error){
                alert(`Erro na veiricação de login: ${error}`)
            }
            setCarregando(false)
        }
    checkLogin();
    }, [logado]);
  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verificacao logado={logado} carregando={carregando}> <Inicial objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/login" element={<Login setLogado={setLogado}/>}/>
        <Route path="/avisos" element={<Verificacao logado={logado} carregando={carregando}> <Inicial info="avisos" tituloSessao="Avisos" objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/avaliacoes" element={<Verificacao logado={logado} carregando={carregando}> <Inicial info="avaliacoes" tituloSessao="Avaliações" objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/eventos" element={<Verificacao logado={logado} carregando={carregando}> <Inicial info="eventos" tituloSessao="Eventos" objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/materiais" element={<Verificacao logado={logado} carregando={carregando}> <Inicial info="materiais" tituloSessao="Materiais" objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/aniversariantes" element={<Verificacao logado={logado} carregando={carregando}> <Inicial objetoUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/form" element={<Verificacao logado={logado} carregando={carregando}> <Form dadosUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="/informativos/:id" element={<Verificacao logado={logado} carregando={carregando}> <Edit dadosUsuario={dadosUsuario}/> </Verificacao>}/>
        <Route path="*" element={<h1>Página não encontrada. <br/> Volte para a página anterior.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
