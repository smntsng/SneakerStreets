import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
