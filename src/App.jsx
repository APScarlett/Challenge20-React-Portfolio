import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spinner from './components/spinner'
import NavBar from './components/navbar'
import '../public/scss/bootstrap.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Spinner/>
      <NavBar/>
    </>
  )
}

export default App
