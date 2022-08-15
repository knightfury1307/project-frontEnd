import React from 'react'
import './section2.css'
import { FaTree }   from 'react-icons/fa';
import { GiCircleForest }   from 'react-icons/gi';
import { GiStakesFence }   from 'react-icons/gi';
import { GiPlantWatering }   from 'react-icons/gi';
import { GiVacuumCleaner }   from 'react-icons/gi';
import { GiWoodenFence }   from 'react-icons/gi';



const Section2 = () => {
  return (
    <div className='container1' id='section2'>
        <div className='section2'>
            <div className='box'>
                <FaTree size={50}/>
                <p className='text'>Landscaping</p>
            </div>
            <div className='box'>
                <GiCircleForest size={50}/>
                <p className='text'>Planting</p>
            </div>
            <div className='box'>
                <GiPlantWatering size={50}/>
                <p className='text'>Watering</p>
            </div>
            <div className='box'>
                <GiWoodenFence size={50}/>
                <p className='text'>Removing</p>
            </div>
            <div className='box'>
                <GiStakesFence size={50} />
                <p className='text'>Fence</p>
            </div>
            <div className='box'>
                <GiVacuumCleaner size={50}/>
                <p className='text'>Lawn Moving</p>
            </div>
        </div>
        <div >
            <p className='text'>Check out our list of service for your garden and <a href='#section4'><span className='color'>get a free quote</span></a></p>
        </div>
    </div>
  )
}

export default Section2