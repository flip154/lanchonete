function Funcionarios({ nome, cargo }) {
  return(
    <>
    <div className="card_funcionario">
      <p>{nome}</p>
      <p>{cargo}</p>
    </div>
    </>
  )
}

export default Funcionarios;