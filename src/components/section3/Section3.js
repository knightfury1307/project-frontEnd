import React from 'react'
import './section3.css'
import img from './images/images.jfif'
import imgage from './images/image1.jpg'


const Section3 = () => {
  return (
    <div className='section3' id='section3'>
        <div className='container-1'>
            <h2>
                We have been designing gardens since 1980.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab quod expedita esse. Voluptates animi recusandae dolores veniam quisquam, optio facilis, asperiores esse beatae assumenda facere nisi nihil, nesciunt ipsa.
            </p>
            <img src={imgage} alt='...' className='image' />
        </div>
        <div className='container-2'>
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis fugiat dicta. Numquam, maiores dolorum!</p>
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis fugiat dicta. Numquam, maiores dolorum!</p>

            <a href='#section4'><button className='button1'>
                Learn More About Us
            </button></a><br/><br/>
            <img src={img} alt='...' className='image2' />
        </div>
    </div>
  )
}

export default Section3