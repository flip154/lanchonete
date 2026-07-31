import { useState } from "react";
import Header from "./componentes/Header";
import Login from "./componentes/Login";
import CardProd from "./componentes/CardProd";
import "./componentes/CardProd.css"
import "./App.css" 
import Calculadora from "./componentes/Calculadora";
import Funcionarios from "./componentes/Funcionarios";

function App(){
  const lanches = [
    { id: 1, nome: "x-salada", preco: 18.00, imagem: "/imagens/x-salada.jpg" },
    { id: 2, nome: "x-burger", preco: 22.00, imagem: "/imagens/x-burger.jpg" },
    { id: 3, nome: "refrigerante", preco: 12.00, imagem: "/imagens/coca.jpg" }
  ];

  const funcionario = [
    { id_funcionario: 1, nome_funcionario: "João", cargo_funcionario: "Chapeiro" },
    { id_funcionario: 2, nome_funcionario: "Milena", cargo_funcionario: "Atendente" },
    { id_funcionario: 3, nome_funcionario: "Pamela", cargo_funcionario: "Gerente" }
  ];

  const [orderQuantities, setOrderQuantities] = useState({});

  const updateQuantidade = (id, delta) => {
    setOrderQuantities(prev => {
      const nextQuantidade = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: nextQuantidade };
    });
  };

  const pedidos = lanches
    .map(lanche => ({
      ...lanche,
      quantidade: orderQuantities[lanche.id] || 0,
      total: (orderQuantities[lanche.id] || 0) * lanche.preco,
    }))
    .filter(item => item.quantidade > 0);

  return(
    <>
      <Header titulo="Lanchonete Dogão e Burgão" subtitulo="O melhor do Planeta" />
      <Login />

      <section className="card">
        <div className="produtos">
          {lanches.map(lanche => (
            <CardProd 
              key={lanche.id}
              nome={lanche.nome}
              preco={lanche.preco}
              quantidade={orderQuantities[lanche.id] || 0}
              onIncrement={() => updateQuantidade(lanche.id, 1)}
              onDecrement={() => updateQuantidade(lanche.id, -1)}
            />
          ))}
        </div>

        {funcionario.map(funcionario => (
          <Funcionarios
            key={funcionario.id_funcionario}
            nome={funcionario.nome_funcionario}
            cargo={funcionario.cargo_funcionario}
          />
        ))}
      </section>

      <section className="card_funcionario">
        <div className="cargo_funcionario">
          <p className="nome_funcionario">Nossa equipe</p>
        </div>
        <Calculadora pedidos={pedidos} />
      </section>
    </>
  )
}

export default App;