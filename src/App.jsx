import MenuNav from "./Components/MenuNav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CrearProducto from "./Components/Pages/CrearProducto"
import Filtrar from "./Components/Pages/Filtrar"
import Home from "./Components/Pages/Home"


function App() {

  return (
    <>
    <BrowserRouter>
    <header>
      <MenuNav></MenuNav>
    </header>
    <main>
      
      <Routes>
        <Route path="/" element={<Home>s</Home>}></Route>
        <Route path="/crearproducto" element={<CrearProducto></CrearProducto>}/>
        <Route path="/filtrarproducto" element={<Filtrar>s</Filtrar>}/>s
      </Routes>
      

    </main>
    <footer>

    </footer>
    </BrowserRouter>
    </>
  )
}

export default App
