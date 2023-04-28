"use client"

import { useState, useEffect } from "react"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1 className="text-2xl bolder flex justify-center items-center mt-5">Entrar</h1>
      <p className="mt-5 flex justify-center items-center text-gray-400">Faça login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input 
            type="email" 
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name="password"
            required
            placeholder="Senha do usuário"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="w-full flex justify-center items-center">
          <button className="btn">Entrar</button>
        </div>
        {/* {!loading && <button className="btn">Entrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default Login