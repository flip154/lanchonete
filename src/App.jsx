import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pedido from "./pages/Pedido";
import Carrinho from "./pages/Carrinho";

function App(){
  return(
    <>
      <Routes>
        <Route path="/"element = {< Home /> } />
        <Route path="/home"element = {< Home /> } />
        <Route path="/login"element = {< Login /> } />
        <Route path="/pedido"element = {< Pedido /> } />
        <Route path="/carrinho"element = {< Carrinho /> } />
      </Routes>
    </>
  )
}

export default App;