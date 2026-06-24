import "./Login.css";
function Login() {
    return (
      <>
        <div className="container">
          <div className="card">
            <h2>Login</h2>
          <input id="input_usuario" type="text" placeholder="E-mail" />
          <input id="input_senha" type="password" placeholder="Senha" />
          <button id="bt_entrar">Entrar</button>
        </div>
        </div>
      </>
    );
  }
  
  export default Login;