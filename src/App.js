import { useState } from 'react'


function App() {
  const [nome, setNome]=useState('')
  const [email, setEmail]=useState('')
  const [idade, setIdade]=useState('')

  const [user,setUser]=useState({})

  function handleRegister(e){
    e.preventDefault()


    alert("usuario registrado com sucesso")
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input 
        placeholder='Digite seu nome'
        value={nome}
        onChange={ (e )=> setNome(e.target.value)}
        /><br/>

        <label>Email:</label>
        <input 
        placeholder='Digite seu Email'
        value={email}
        onChange={ (e )=> setEmail(e.target.value)}
        /><br/>

        <label>Idade:</label>
        <input 
        placeholder='Digite seu idade'
        value={idade}
        onChange={ (e )=> setIdade(e.target.value)}
        /><br/>

        <button type='submit'>Registrar</button>
      </form>

      <br/><br/>

    <div>
      <sapn>Bem vindo: {user.nome}</sapn><br/>
      <sapn>Idade {user.idade}:</sapn><br/>
      <sapn>Email: {user.email}</sapn><br/>
    </div>
      </div>
  )
}

export default App
