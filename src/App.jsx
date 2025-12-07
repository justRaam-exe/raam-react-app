import { useEffect, useState } from 'react'
import raamLogo from './assets/raamlogo.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compounen/header.jsx'
import Footer from './compounen/footer.jsx'
import PinNumberGenerator from './compounen/generatenum.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [ipAddress, setIpAddress] = useState('')

  useEffect (() => {
    const fetchIpAddress = async () => {
      const apiUrl = import.meta.env.VITE_API_URL

      try {
        const response = await fetch(`${apiUrl}?format=json`);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        setIpAddress('Error fetching IP address');
        console.log(err.message);
      };
    }
    fetchIpAddress();
  }, [])

  return (
    <>
      <Header />
      <div>
        <a href="https://youtube.com" target="_blank">
          <img src={raamLogo} className="logo" alt="raam logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>ur Ip Address is : {ipAddress}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <NumberGenerator />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
