import "./CardProd.css";
import "./Funcionarios";

function CardProd({ nome, preco, quantidade, onIncrement, onDecrement, onAddToCart }) {
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
      <button className="botao_adicionar_carrinho" type="button" onClick={onAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default CardProd;