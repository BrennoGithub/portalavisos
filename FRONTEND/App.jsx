import {GET} from "./static/js/requisicaoHTTP.js"
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom"
import Login from "./Paginas/Login.jsx"
import Inicial from "./Paginas/Inicial.jsx"
import Form from "./Paginas/Form.jsx"
import Edit from "./Paginas/Edit.jsx"
import "./static/css/estilo_global.css"
import "./static/css/estilo_Informativos.css"

function App() {
  const [logado, setLogado] = useState(false)
  const [dadosUsuario, setDadosUsuario] = useState({})

  useEffect(() => {
    async function checkLogin(){
      const estaLogado = await GET("http://localhost:5000/");
      setDadosUsuario(estaLogado)
      setLogado(estaLogado["login"])
      "mensagemServidor" in estaLogado ? alert(estaLogado["mensagemServidor"]) : null
      
    }
    checkLogin();
  }, []);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={logado ? <Inicial objetoUsuario={dadosUsuario}/> : <Navigate to={"/login"} replace/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/avisos" element={<Inicial info="avisos" tituloSessao="Avisos" objetoUsuario={dadosUsuario}/>}/>
        <Route path="/avaliacoes" element={<Inicial info="avaliacoes" tituloSessao="Avaliações" objetoUsuario={dadosUsuario}/>}/>
        <Route path="/eventos" element={<Inicial info="eventos" tituloSessao="Eventos" objetoUsuario={dadosUsuario}/>}/>
        <Route path="/materiais" element={<Inicial info="materiais" tituloSessao="Materiais" objetoUsuario={dadosUsuario}/>}/>
        <Route path="/aniversariantes" element={<Inicial objetoUsuario={dadosUsuario}/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/informativos/:id" element={<Edit/>}/>
        <Route path="*" element={<h1>Página não encontrada</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
