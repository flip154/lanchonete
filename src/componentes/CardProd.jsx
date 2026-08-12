import "./CardProd.css";
import "./Funcionarios";

function CardProd({ nome, preco, quantidade, onIncrement, onDecrement, onAddToCart }) {
  return (
    <>
    <div className="card_produto">
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <p>Quantidade: {quantidade}</p>
      <p>Total: R$ {(preco * quantidade).toFixed(2)}</p>
         <div className="bt"> <button className="bt_diminuir" onClick={() => 
          {
            if(quantidade > 0){
              setContador(quantidade - 1)
            }
          }
        }>➖</button>
        <button className="botao_comprar" type="button" onClick={onIncrement}>
          ➕
        </button>
      </div>
      <button className="botao_adicionar_carrinho" type="button" onClick={onAddToCart}>
        🛒
      </button>
    </div>
    </>
  );
}

export default CardProd;