import "./CardProd.css";
function CardProd({ nome, preco, cargo }) {
    return (
<>
      <div className= "card_produto">
        <h2>{nome}</h2>
        <h3>{preco}</h3>
        <h3>{cargo}</h3>
        <button className="botao_comprar" onClick={() => {}}>
          Comprar
        </button>
      </div>
</>
    );
  }
  
  export default CardProd;