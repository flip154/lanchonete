import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./componentes/CardProd";
import Contador from "./componentes/Contador";
import "./componentes/CardProd.css"
import "./App.css" 


function App(){
  return(
    <>
      <Header titulo = "Lanchonete Dogão e  Burgão"
       subtitulo="O melhor do Planeta" />
       
      <Login  />
      <section className="card">
        <div className="produtos">
          <CardProd nome="X-Salada" preco={18.00} quantidade= "quantidade: " preco_total= "preço:" />
          <CardProd nome="X-Burguer" preco={22.00} quantidade = "quantidade: " preco_total= "preço:" />
          <CardProd nome="CocaCola 2L" preco={12.00} quantidade= "quantidade: " preco_total= "preço:" />
      </div>

      <div className="card_funcionario">
        <h2 className="cargo_funcionario">Atendente:</h2>
        <p className="nome_funcionario">João</p>

      </div>

    
      </section>
    </>

  )
}
export default App;
 