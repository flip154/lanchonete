import { useState } from "react";
import Header from "../componentes/Header";
import Login from "../pages/Login";
import CardProd from "../componentes/CardProd";
import "../componentes/CardProd.css"
import "../App.css" 
import Calculadora from "../componentes/Calculadora";
import Funcionarios from "../componentes/Funcionarios";


function Home() {
  const lanches = [
    { id: 1, nome: "x-salada", preco: 18.00, imagem: "/public/imagens/x-salada.jpg"},
    { id: 2, nome: "x-burger", preco: 22.00, imagem: "/public/imagens/x-burger.jpg"},
    { id: 3, nome: "Hot Dog", preco: 16.00, imagem: "/public/imagens/hotdog.jpg"},
    { id: 4, nome: "Hot Dog Duplo", preco: 20.00, imagem: "/public/imagens/hotdog_duplo.jpg"}
  ];

  const bebidas = [
    { id: 101, nome: "Água", preco: 18.00, imagem: "/public/imagens/agua.jpg"},
    { id: 102, nome: "Pepsi Lata 350ml", preco: 22.00, imagem: "/public/imagens/pepsi_lata.jpg"},
    { id: 103, nome: "Coca-Cola Lata 350ml", preco: 12.00, imagem: "/public/imagens/coca_lata.jpg"},
    { id: 104, nome: "Coca-Cola Lata 2L", preco: 12.00, imagem: "/public/imagens/coca_2l.jpg"}
  ];

  const funcionario = [
    { id_funcionario: 1, nome_funcionario: "João", cargo_funcionario: "Chapeiro" },
    { id_funcionario: 2, nome_funcionario: "Milena", cargo_funcionario: "Atendente" },
    { id_funcionario: 3, nome_funcionario: "Pamela", cargo_funcionario: "Gerente" }
  ];

  const [orderQuantities, setOrderQuantit] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const updateQuantidade = (id, delta) => { 
    setOrderQuantities(prev => {
      const nextQuantidade = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: nextQuantidade };
    });
  };

  const handleAddToCart = (id, nome) => {
    const quantidade = orderQuantities[id] || 0;
    if (quantidade === 0) {
      alert("Selecione ao menos 1 item antes de adicionar ao carrinho.");
      return;
    }

    setCartCount(prev => prev + quantidade);
    alert(`${quantidade} ${nome} adicionado ao carrinho`);
    setOrderQuantit(prev => ({ ...prev, [id]: 0 }));
  };

  const handleClearCart = () => {
    setCartCount(0);
    setOrderQuantit({});
  };

  const produtos = bebidas.concat(lanches);

  const pedidos = produtos
    .map(item => ({
      ...item,
      quantidade: orderQuantities[item.id] || 0,
      total: (orderQuantities[item.id] || 0) * item.preco,
    }))
    .filter(item => item.quantidade > 0);
  return (
    <>
    <Header
        titulo="Lanchonete Dogão e Burgão"
        subtitulo="O melhor do Planeta"
        cartCount={cartCount}
        onClearCart={handleClearCart}
      />
      <Login />

      <section className="card">
        <div className="produtos">
          {produtos.map(produto => (
            <CardProd 
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              quantidade={orderQuantities[produto.id] || 0}
              onIncrement={() => updateQuantidade(produto.id, 1)}
              onDecrement={() => updateQuantidade(produto.id, -1)}
              onAddToCart={() => handleAddToCart(produto.id, produto.nome)}
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

      <section className="card_calculadora">
        
        <Calculadora pedidos={pedidos} />
      </section>
</>
  );
}

export default Home;