import React from 'react'
import './section1.css'
import garden1 from './images/garden1.jpg'
import garden2 from './images/garden2.jpg'
import garden3 from './images/garden3.jpg'


const Section1 = () => {
  return (
    <div className='section1' id='section1'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <a href='#section2'><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button></a>
    <a href='#section2'> <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button></a>
    <a href='#section2'> <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button></a>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={garden1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>We Provide Best Gardening Service</h3>
        <h5>Trust The Grounds Guys professionals to take care of your commercial or residential grounds.</h5>
        <button className='button2'>View Our Services</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={garden3} class="d-block w-100  " alt="..."/>
      <div class="carousel-caption d-none d-md-block ">
        <h3 >We Provide Best Gardening Service</h3>
        <h5>Trust The Grounds Guys professionals to take care of your commercial or residential grounds.</h5>
        <button className='button2'>View Our Services</button>
      </div>
    </div>
    <div class="carousel-item " >
      <img src={garden2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>We Provide Best Gardening Service</h3>
        <h5>Trust The Grounds Guys professionals to take care of your commercial or residential grounds.</h5>
        <button className='button2'>View Our Services</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Section1