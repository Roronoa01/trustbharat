import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🇮🇳 TrustBharat</h1>
      <p>Frontend is running 🚀</p>
      </div>
    </>
  )
}

export default App
