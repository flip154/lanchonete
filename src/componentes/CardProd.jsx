import "./CardProd.css";
import "./Contador.jsx";
import { useState } from "react";

function CardProd({ nome, preco, total_preco}) {
  const [quantidade, setContador] = useState(0);

    return (
<>
      <div className= "card_produto">
        <h2>{nome}</h2>
        <p>preço R$: {preco}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Total:{total_preco} R$: {preco * quantidade}</p>
       <div className="bt"> <button className="bt_diminuir" onClick={() => 
          {
            if(quantidade > 0){
              setContador(quantidade - 1)
            }
          }
        }>➖</button>

        <button className="botao_comprar" onClick={() => {}}>✔</button>
        <button className="bt_adicionar" onClick={() => setContador(quantidade + 1)}>➕</button>
        </div>
      </div>
</>
    );
  }
  
  export default CardProd;