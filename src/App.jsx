import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./componentes/CardProd";
import Contador from "./componentes/Contador";


function App(){
  return(
    <>
      <Header titulo = "Lanchonete Dogão e  Burgão"
       subtitulo="O melhor do Planeta" />
       
      <Login  />
      <section className="card">
        <div className="produtos">
          <CardProd nome="X-Salada" preco="R$ 18,80" />
          <CardProd nome="X-Burguer" preco="R$ 22,50" />
          <CardProd nome="Coca-Cola 2L" preco="R$ 12,00" />
      </div>

      <div className="card_funcionario">
        <CardProd nome="João" cargo="Atendente"/>

      </div>

      <Contador />
      </section>
    </>

  )
}
export default App;
 