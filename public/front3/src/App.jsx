import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const SERVER_URL = "http://127.0.0.1:8080"

function App() {
  const [email, setEmail] = useState("")
  const [pas, setPass] = useState("")
  const [tk, setTK] = useState("")

  const handleClick = async () => {
    console.log(email, pas);
    const res = await fetch(`${SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        pas
      })
    })
    const result = await res.json()
    console.log(result);
    console.log(result);
    setTK(result.accessToken)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
          <h1>front 3</h1>
          <h1>{tk? "AUTENTICADO" : "IMPOSTOR"}</h1>
          <input name='email' type='email' placeholder='ponga su correo' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <input name='password' type='password' placeholder='ponga su contraseña' value={pas} onChange={(e) => {
            setPass(e.target.value)
          }}/>
      <button onClick={handleClick}>submit</button>
      </section>


    </>
  )
}

export default App
