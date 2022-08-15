import React from 'react'
import './section4.css'
import { TiTickOutline }   from 'react-icons/ti';

const Section4 = () => {
  return (
    <>
    <div className='section4' id='section4'>
        <div className='boz'>
            <TiTickOutline size={50} className='tick'/>
            <h4>We Prefer Quality First</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ex earum eligendi expedita facere cumque. </p>
        </div>
        <div className='boz'>
            <TiTickOutline size={50} className='tick'/>
            <h4>We Prefer Quality First</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ex earum eligendi expedita facere cumque. </p>
        </div>
        <div className='boz1' style={{padding:15}}>
            <TiTickOutline size={50} className='tick'/>
            <h4>We Prefer Quality First</h4>
            <p style={{color: "#808000"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ex earum eligendi expedita facere cumque. </p>
        </div>
       
        
    </div>
    
    </>
  )
}

export default Section4