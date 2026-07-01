import { useState } from "react";

function Calculadora (){
    const [pedido, setPedido] = useState('');
    const [total, setTotal] = useState(0);
    const [pedidos, setPedidos] = useState([]);

    const adicionarPedido = () => {
        const valor = parseFloat(pedido)
        if (!isNaN(valor)){
            setPedidos([...pedidos, valor]);
            setTotal(...total + valor);
            setPedido('');
        }
    }
    return(
        <>
        <div>
            <h1>Calculadora de Pedidos</h1>
            <input type="number"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)} 
            />
            <button onClick={adicionarPedido}>Adcionar Pedido</button>
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <h3>Pedidos: </h3>
            <ul>
                {pedidos.map((p, index) => (
                    <li key={index}>R$ {p.toFixed(2)}</li>
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default Calculadora;