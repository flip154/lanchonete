import "./CardProd.css";

function CardProd({ nome, preco, quantidade, onIncrement, onDecrement }) {
  return (
    <div className="card_produto">
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <p>Quantidade: {quantidade}</p>
      <p>Total: R$ {(preco * quantidade).toFixed(2)}</p>

      <div className="bt">
        <button className="bt_diminuir" onClick={onDecrement} disabled={quantidade === 0}>
          ➖
        </button>
        <button className="botao_comprar" type="button" onClick={onIncrement}>
          ➕
        </button>
      </div>
    </div>
  );
}

export default CardProd;