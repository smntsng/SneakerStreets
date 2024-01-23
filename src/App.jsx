import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductPage from './components/Product Page/ProductPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Productpage from './pages/Productpage';
import Hero from './components/Hero/Hero'
import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader/PreLoader';
import Checkout from './pages/Checkout';
import ContactUs from './components/ContactUs/ContactUs'



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
