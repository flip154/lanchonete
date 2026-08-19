import "./CardProd.css";
import "./Funcionarios";

function CardProd({ nome, preco, imagem, quantidade, onIncrement, onDecrement, onAddToCart }) {
  return (
    <>
    <div className="card_produto">
      <img className="imagem_produto" src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <p>Quantidade: {quantidade}</p>
      <p>Total: R$ {(preco * quantidade).toFixed(2)}</p>
         <div className="bt">
        <button className="bt_diminuir" type="button" onClick={onDecrement} disabled={quantidade === 0} aria-label={`Diminuir quantidade de ${nome}`}>−</button>
        <button className="botao_comprar" type="button" onClick={onIncrement}>
          ➕
        </button>
      </div>
      <button className="botao_adicionar_carrinho" type="button" onClick={onAddToCart}>
        Adicionar ao carrinho
      </button>
    </div>
    </>
  );
}

export default CardProd;