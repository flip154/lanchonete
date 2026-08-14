import "./Header.css";
import { Router } from "react-router-dom";

import { Link } from "react-router-dom";

function Header({ titulo, subtitulo, cartCount, onClearCart }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-titles">
          <h1 className="header-title">{titulo}</h1>
          <h2 className="header-subtitle">{subtitulo}</h2>
        </div>

        <div className="header-cart">
          <button
            type="button"
            className="header-cart-button"
            onClick={onClearCart}
            aria-label={`Limpar carrinho com ${cartCount} itens`}
          >
            🛒 ({cartCount})
          </button>

          <nav className='menu'>
            <Link to = "/home">Home</Link>
            <Link to = "/carrinho">Carrinho</Link>
            <Link to = "/pedidos">Pedidos</Link>
            <Link to = "/login">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;