import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/Product Page/ProductPage";
import Hero from "./components/Hero/Hero";
import PreLoader from "./components/PreLoader/PreLoader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Productpage from "./pages/Productpage";
import ContactUs from "./pages/Contact";


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
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Hero />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
