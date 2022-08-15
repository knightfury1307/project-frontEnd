import React from 'react'
import './navbar2.css'
import { GiLotus }   from 'react-icons/gi';
import { HiOutlineSearch }   from 'react-icons/hi';
const navbar2 = () => {
  return (
    <div className='navbar'>
       <div className='part1'>
        <GiLotus size={70} className='lotus' />
        <div className='subpart'>
            <h1>Gardening</h1>
            <h2>MASTERING ON LANDSCAPING</h2>
        </div>
        </div>
        <div className='part2'>
            <ul className='list'>
                <a href='#top'><li>Home</li></a>
                <a href='#section2'> <li>Services</li></a>
                <a href='#section3'> <li>About</li></a>
                <a href='#section5'><li>Projects</li></a>
                <a href='#section5'><li>Blog</li></a>
                <a href='#section4'><li>Content</li></a>
                <li><HiOutlineSearch/></li>
                <li><a href='#section4'><buttin className='button1'>Get Free Quote</buttin></a></li>
            </ul>
        </div>
       
    </div>
  )
}

export default navbar2