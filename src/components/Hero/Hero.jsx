import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import './Hero.css';


//Images

import slide1 from "../../assets/images/sliderEwp.png"
import slideimage2 from '../../assets/images/sliderImage2.png'
import slideimage3 from '../../assets/images/sliderImage3.png'
import slideimage4 from '../../assets/images/sliderImage4.png'
import slideimage5 from '../../assets/images/sliderImage5.png'
import slideimage6 from '../../assets/images/sliderImage6.png'
import slideimage7 from '../../assets/images/sliderImage7.png'
const Hero = () => {
  return (
        <div className="hero-carousel-container m-2">
            <Carousel>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slide1}
                  alt="First slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                  
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage2}
                  alt="Fifth slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage3}
                  alt="Sixth slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage4}
                  alt="Seventh slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage5}
                  alt="Eighth slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage6}
                  alt="Eighth slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  className="d-block imgSlide "
                  src={slideimage7}
                  alt="Ninth slide"
                />
                <div className="carouselCTA">
                <Carousel.Caption>
                
                  <button className="carousel-button">SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </CarouselItem>
            </Carousel>
        </div>
  );
};

export default Hero;
