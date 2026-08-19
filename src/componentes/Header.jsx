import "./Header.css";
import { Link } from "react-router-dom";

function Header({ titulo = "Dogão & Burgão", subtitulo = "Lanches feitos para você", cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-titles">
          <h1 className="header-title">{titulo}</h1>
          <h2 className="header-subtitle">{subtitulo}</h2>
        </div>

        <div className="header-cart">
          <Link className="header-cart-button" to="/carrinho" aria-label={`Abrir carrinho com ${cartCount} itens`}>
            Carrinho <span>{cartCount}</span>
          </Link>

          <nav className='menu'>
            <Link to="/">Início</Link>
            <Link to="/pedido">Pedido</Link>
            <Link to="/carrinho">Carrinho</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;