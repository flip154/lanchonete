import './Header.css'

function Header({ titulo, subtitulo, cartCount, onClearCart }) {
  return (
    <div className="titulo">
      <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </div>
      <div className="carrinho-header">
        <button type="button" className="carrinho-botao" onClick={onClearCart}>
          Carrinho ({cartCount})
        </button>
      </div>
    </div>
  );
}

export default Header;