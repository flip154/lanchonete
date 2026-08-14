import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navegate = useNavigate()
  function entrar(){
    navegate("/home")
  }

    return (
      <>
        <div className="container">
          <div className="card">
          <h2>Login</h2>
          <input id="input_usuario" type="text" placeholder="E-mail" />
          <input id="input_senha" type="password" placeholder="Senha" />
          <button onClick={entrar}>Entrar</button>
        </div>
        </div>
      </>
    );
  }
  
  export default Login;