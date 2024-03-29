import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductPage from './components/Product Page/ProductPage'
import Home from './pages/Home'
import Login from './pages/Login'
import React, { useState, useEffect } from 'react';
import PreLoader from './components/PreLoader/PreLoader';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact'
import ScrollToTop from "react-scroll-to-top";
import Registration from './pages/Registration';
import Popular from './pages/Popular';
import Products from './pages/Products';
import Blog from './pages/Blog'
import Securecheckout from './components/Checkout/Secure/SecureCheckout';



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
              <Route path="/productpage/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/registration" element={<Registration />} />
              {/*  */}
              <Route path="/popular" element={ <Popular /> } />
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/securecheckout" element={<Securecheckout />} />
            </Routes>
          <ScrollToTop smooth color="Black" className="scrollBtn" />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
