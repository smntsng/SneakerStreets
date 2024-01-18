import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
