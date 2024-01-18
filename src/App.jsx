import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Hero from './components/Hero/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Hero />
      <Footer />
    </>
  )
}

export default App
