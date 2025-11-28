import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Login from "./Paginas/Login.jsx"
import Inicial from "./Paginas/Inicial.jsx"
import Form from "./Paginas/Form.jsx"
import "./static/css/estilo_global.css"
import "./static/css/estilo_Informativos.css"

function App() {
  /*
  <nav>
    <Link to={"/"}> Inicial </Link>
    <Link to={"/avisos"}> 1 </Link>
    <Link to={"/avaliacoes"}> 2 </Link>
    <Link to={"/eventos"}> 3 </Link>
    <Link to={"/materiais"}> 4 </Link>
    <Link to={"/aniversariantes"}> 5 </Link>
    <Link to={"/form"}> 6 </Link>
    <Link to={"/informativos/1"}> 7 </Link>
  </nav>
  */
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/avisos" element={<Inicial info="avisos" tituloSessao="Avisos"/>}/>
        <Route path="/avaliacoes" element={<Inicial info="avaliacoes" tituloSessao="Avaliações"/>}/>
        <Route path="/eventos" element={<Inicial info="eventos" tituloSessao="Eventos"/>}/>
        <Route path="/materiais" element={<Inicial info="materiais" tituloSessao="Materiais"/>}/>
        <Route path="/aniversariantes" element={<Inicial/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/informativos/:id" element={<h1>Turma</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
