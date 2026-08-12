import "./Header.css";

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
            <link to = "/home">Home</link>
            <link to = "/carrinho">Carrinho</link>
            <link to = "/pedidos">Pedidos</link>
            <link to = "/login">Login</link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;