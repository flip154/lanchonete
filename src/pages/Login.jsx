import './Login.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [modoCadastro, setModoCadastro] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    function mostrarMensagem(texto, tipo = "erro") {
        setMensagem(texto);
        setTipoMensagem(tipo);
    }

    function entrar() {
        const nomeUsuario = usuario.trim();

        if (nomeUsuario === "admin" && senha === "123") {
            localStorage.setItem("usuario", nomeUsuario);
            localStorage.setItem("perfil", "cozinha");
            navigate("/pedido");
            return;
        }

        const contas = JSON.parse(localStorage.getItem("contasClientes") || "[]");
        const contaEncontrada = contas.find(
            (conta) => conta.usuario === nomeUsuario && conta.senha === senha
        );

        if ((nomeUsuario === "cliente" && senha === "123") || contaEncontrada) {
            localStorage.setItem("usuario", nomeUsuario);
            localStorage.setItem("perfil", "cliente");
            navigate("/home");
            return;
        }

        mostrarMensagem("Usuário ou senha inválidos.");
    }

    function criarConta() {
        const nomeUsuario = usuario.trim();
        const contas = JSON.parse(localStorage.getItem("contasClientes") || "[]");

        if (nomeUsuario.length < 3) {
            mostrarMensagem("O usuário deve ter pelo menos 3 caracteres.");
            return;
        }

        if (senha.length < 4) {
            mostrarMensagem("A senha deve ter pelo menos 4 caracteres.");
            return;
        }

        if (senha !== confirmacaoSenha) {
            mostrarMensagem("As senhas não coincidem.");
            return;
        }

        if (nomeUsuario.toLowerCase() === "admin" || contas.some((conta) => conta.usuario.toLowerCase() === nomeUsuario.toLowerCase())) {
            mostrarMensagem("Este usuário já está em uso.");
            return;
        }

        contas.push({ usuario: nomeUsuario, senha });
        localStorage.setItem("contasClientes", JSON.stringify(contas));
        setUsuario(nomeUsuario);
        setSenha("");
        setConfirmacaoSenha("");
        setModoCadastro(false);
        mostrarMensagem("Conta criada! Agora você já pode entrar.", "sucesso");
    }

    function trocarModo() {
        setModoCadastro(!modoCadastro);
        setMensagem("");
    }

    return (
        <main className="login-container">
            <section className="login-apresentacao">
                <span className="login-selo">DOGÃO & BURGÃO</span>
                <div>
                    <p className="login-kicker">Sabor que reúne</p>
                    <h1>Seu pedido começa aqui.</h1>
                    <p className="login-descricao">Entre para pedir seus favoritos ou crie sua conta.</p>
                </div>
                <span className="login-detalhe">Lanches • Bebidas • Alegria</span>
            </section>

            <section className="login-card">
                <div className="login-cabecalho">
                    <p className="login-etiqueta">Área do cliente</p>
                    <h2>{modoCadastro ? "Crie sua conta" : "Bem-vindo de volta"}</h2>
                    <p>{modoCadastro ? "Defina seu usuário e sua senha." : "Entre para fazer seu pedido."}</p>
                </div>

                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    modoCadastro ? criarConta() : entrar();
                }}>
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        id="usuario"
                        type="text"
                        placeholder="Digite seu usuário"
                        value={usuario}
                        onChange={(evento) => {
                            setUsuario(evento.target.value);
                            setMensagem("");
                        }}
                        autoComplete="username"
                        required
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(evento) => {
                            setSenha(evento.target.value);
                            setMensagem("");
                        }}
                        autoComplete={modoCadastro ? "new-password" : "current-password"}
                        required
                    />

                    {modoCadastro && (
                        <>
                            <label htmlFor="confirmacao-senha">Confirme sua senha</label>
                            <input
                                id="confirmacao-senha"
                                type="password"
                                placeholder="Repita sua senha"
                                value={confirmacaoSenha}
                                onChange={(evento) => setConfirmacaoSenha(evento.target.value)}
                                autoComplete="new-password"
                                required
                            />
                        </>
                    )}

                    <button type="submit">
                        {modoCadastro ? "Criar minha conta" : "Entrar"}
                    </button>
                </form>

                {mensagem && (
                    <p className={`login-mensagem ${tipoMensagem}`} role="status">
                        {mensagem}
                    </p>
                )}

                <p className="login-alternativa">
                    {modoCadastro ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
                    <button type="button" onClick={trocarModo}>
                        {modoCadastro ? "Entrar agora" : "Criar conta"}
                    </button>
                </p>
            </section>
        </main>
    );
}

export default Login;