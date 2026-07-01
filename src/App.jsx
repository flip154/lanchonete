import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./componentes/CardProd";
import Contador from "./componentes/Contador";
import "./componentes/CardProd.css"
import "./App.css" 
import Calculadora from "./componentes/Calculadora";


function App(){
  const lanches =[{id:1, nome:"x-salada", preco:"18.00"},
                  {id:2, nome:"x-burger", preco:"22.00"},
                  {id:3, nome:"refrigerante", preco:"12.00"}]
  return(
    <>
      <Header titulo = "Lanchonete Dogão e Burgão"
       subtitulo="O melhor do Planeta" />
       
      <Login  />
      <div>

      </div>
      {lanches.map(lanches=>(
      <CardProd 
      key={lanches.id}
      nome={lanches.nome}
      preco={lanches.preco}
      />))}
      <section className="card">
        <div className="produtos">
          {lanches.map}
      </div>

      <div className="card_funcionario">
        <h2 className="cargo_funcionario">Atendente:</h2>
        <p className="nome_funcionario">João</p>

      </div>

    <Calculadora />
      <div>

      </div>
    
      </section>
    </>

  )
}
export default App;
 