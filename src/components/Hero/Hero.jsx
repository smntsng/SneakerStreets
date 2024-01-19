import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css';

const Hero = () => {
  return (
<div className="hero-carousel-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block imgSlide "
          src="https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <div className="carouselCTA">
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className="carousel-button">SHOP NOW</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgSlide "
          src="https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <div className="carouselCTA">
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="carousel-button">SHOP NOW</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgSlide "
          src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <div className="carouselCTA">
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button className="carousel-button">SHOP NOW</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imgSlide "
          src="https://images.unsplash.com/photo-1584735175097-719d848f8449?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fourth slide"
        />
        <div className="carouselCTA">
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button className="carousel-button">SHOP NOW</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Hero;
