import "./Calculadora.css";

function Calculadora({ pedidos }) {
  const total = pedidos.reduce((acc, item) => acc + item.total, 0);
  const itens = pedidos.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <div className="calculadora">
      <h2>Total de Pedidos</h2>
      <p>Itens no pedido: {itens}</p>
      <p>Total geral: R$ {total.toFixed(2)}</p>

      {pedidos.length > 0 ? (
        <div className="calculadora-lista">
          <h3>Resumo dos pedidos</h3>
          <ul>
            {pedidos.map((item) => (
              <li key={item.id}>
                {item.nome} x {item.quantidade} = R$ {item.total.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Adicione produtos para ver o total.</p>
      )}
    </div>
  );
}

export default Calculadora;
