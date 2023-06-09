"use client"

import signUp from "@/app/firebase/auth/signupundefined"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const { result, error } = await signUp(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/")
  }

  return (
    <div>
      <h1 className="text-2xl bolder flex justify-center items-center mt-5">Cadastre-se para postar</h1>
      <p className="flex justify-center items-center mt-5 text-gray-400">Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input 
          type="text" 
          name="name"
          required
          placeholder="Nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail</span>
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
          placeholder="insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input 
          type="password" 
          name="confirmPassword"
          required
          placeholder="insira sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <div className="w-full flex justify-center items-center mt-5">
          <button type="submit" className="btn">Cadastrar</button>
        </div>
        {/* {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default Register