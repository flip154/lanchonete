function Login() {
    return (
      <>
        <h2>Login</h2>
        <div className="container">
          <input type="text" placeholder="Usuário ou E-mail" />
          <input type="password" placeholder="Senha" />
          <button>Enviar</button>
        </div>
      </>
    );
  }
  
  export default Login;