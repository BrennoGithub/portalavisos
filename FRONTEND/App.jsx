import {BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Login from "./Paginas/Login.jsx"
import Inicial from "./Paginas/Inicial.jsx"
import Form from "./Paginas/Form.jsx"
import Edit from "./Paginas/Edit.jsx"
import {GET} from "./js/requisicaoHTTP.js"
import "./css/estilo_global.css"
import "./css/estilo_Informativos.css"

function App() {
  const [logado, setLogado] = useState(false)
  const [dadosUsuario, setDadosUsuario] = useState({})

  useEffect(() => {
    async function checkLogin(){
      const estaLogado = await GET("/informativos/");
      setDadosUsuario(estaLogado)
      setLogado(estaLogado["login"])
      "mensagemServidor" in estaLogado ? alert(estaLogado["mensagemServidor"]) : null
    }
    checkLogin();
  }, []);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={logado ? <Inicial objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/avisos" element={logado ? <Inicial info="avisos" tituloSessao="Avisos" objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/avaliacoes" element={logado ? <Inicial info="avaliacoes" tituloSessao="Avaliações" objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/eventos" element={logado ? <Inicial info="eventos" tituloSessao="Eventos" objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/materiais" element={logado ? <Inicial info="materiais" tituloSessao="Materiais" objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/aniversariantes" element={logado ? <Inicial objetoUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/form" element={logado ? <Form dadosUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="/informativos/:id" element={ logado ? <Edit dadosUsuario={dadosUsuario}/> : <Navigate to={"http://localhost:5173/login"} replace/>}/>
        <Route path="*" element={<h1>Página não encontrada. <br/> Volte para a página anterior.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
