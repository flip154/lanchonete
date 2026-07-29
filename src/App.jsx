import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./componentes/CardProd";
import Contador from "./componentes/Contador";
import "./componentes/CardProd.css"
import "./App.css" 
import Calculadora from "./componentes/Calculadora";
import Funcionarios from "./componentes/Funcionarios";


function App(){
  const lanches =[{id:1, nome:"x-salada", preco:'18.00', imagem: "/imagens/x-salada.jpg"},
                  {id:2, nome:"x-burger", preco:'22.00', imagem: "/imagens/-burger.jpg"},
                  {id:3, nome:"refrigerante", preco:'12.00', imagem: "/imagens/coca.jpg"}]

                   const funcionario =[{id_funcionario:1, nome_funcionario:"João", cargo_funcionario:"Chapeiro"},
                        {id_funcionario:2, nome_funcionario:"Milena", cargo_funcionario:"Atendente"},
                        {id_funcionario:3, nome_funcionario:"Pamela", cargo_funcionario:"Gerente"}]
    

  return(
    <>
    <Header titulo = "Lanchonete Dogão e Burgão"
       subtitulo="O melhor do Planeta" />
       
    <Login  />
      <div>

      </div>
      {
      lanches.map(lanches=>(
        <CardProd 
        key={lanches.id}
        nome={lanches.nome}
        preco={lanches.preco}
        />
    ))
      }
      <section className="card">
        <div className="produtos">
      </div>
    {funcionarios.map(funcionarios=>(
    <Funcionarios
      key={funcionarios.id_funcionario}
      nome={funcionarios.nome_funcionario}
      cargo={funcionarios.cargo_funcionario}
      />
    ))
      }
      </section>
      <section className="card_funcionario">
      <div className="cargo_funcionario" cargo_funcionario>
      <p className="nome_funcionario" nome_funcionario></p>
      </div>

    <Calculadora />
      <div>

      </div>
    
      </section>
    </>
  
  )

}

export default App;