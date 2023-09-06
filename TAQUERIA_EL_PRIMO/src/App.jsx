import { useState } from 'react'
import './App.css'
import Login from './components/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-red-800 h-screen grid content-center'>
      <div className='container mx-auto '>
        <Login/>        
      </div>
    </main>
  )
}

export default App
