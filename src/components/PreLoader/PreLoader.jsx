import React from 'react';
import './PreLoader.css';
import loader from '../../assets/images/Loader.gif'

const Preloader = () => (
  <div className="preloader">
    <img src={loader}/>
    <div className="loader"></div>
  </div>
);

export default Preloader;