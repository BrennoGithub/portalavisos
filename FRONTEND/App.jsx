import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicial</h1>}/>
        <Route path="/usuario" element={<h1>Usuario</h1>}/>
        <Route path="/informativo" element={<h1>Informativo</h1>}/>
        <Route path="/turma" element={<h1>Turma</h1>}/>
      </Routes>
      <nav>
        <Link to={"/"}> Inicial </Link>
        <Link to={"/usuario"}> Usuario </Link>
        <Link to={"/informativo"}> Informativo </Link>
        <Link to={"/turma"}> Turma </Link>
      </nav>
    </BrowserRouter>
  )
}

export default App
