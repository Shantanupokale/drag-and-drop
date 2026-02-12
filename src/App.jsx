import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DndBox from './components/dndbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DndBox/>
    </>
  )
}

export default App
