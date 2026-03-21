import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios";

function App() {
  const [data, setData] = useState(null)

   useEffect(() => {
    axios.get("http://localhost:8000")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <>
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🇮🇳 TrustBharat</h1>

      {data ? (
        <>
          <h2>{data.message}</h2>
          <p>Status: {data.status}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  )
}

export default App
