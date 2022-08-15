import React, { useState } from 'react';
import './section6.css';
import img from './images/im.jpg';
import amber from './images/amber.jpg';

const Section6 = () => {

    const [formData , setFormData] = useState({
        name : "",
        email : "",
        landscaping : "",
        message : "",
    
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(){
        submit();
    }

    function submit(){
        if(
            (formData.name !== "") &&
            (formData.email !== "")
        ){
            alert("Query Submitted")
        }
        else
        {
            alert("Missing Value in form")
        }
        
    }



  return (
    <div className='section6' id='section6'>
        <div className=' subs0'>
            <img src={img} alt='...' className='pp' />
        </div>

        <div className=' subs1'>
            <div className='div'>
                <h2>
                    Our Commitment
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repellat tempore error quibusdam nam neque labore, qui, soluta dolorem unde voluptatibus, mollitia quisquam inventore corporis.</p>
                <div className='cont1'>
                    <img src={amber} alt='...' className='dp'/> 
                    &nbsp; &nbsp;
                    <div className='cont'>
                        <h3>Reuben Sandwich</h3>
                        <p>CEO of Gardening</p>
                    </div>
                    
                </div>
            </div> 
            <div className='but'>
            <a href='#section2'> View Services</a>    
            </div>   
        </div>
        
        <div className='subs1 child'>
            <div className='div'>
            <h2>Get Free Quote</h2>
            <form onSubmit={submit}>
                <input 
                    className='in'
                    onChange={handleChange}
                    value={formData.name}
                    type='text'
                    placeholder='Name'
                    name='name'
                    required
                />
                <input 
                    className='in'
                    onChange={handleChange}
                    value={formData.email}
                    type='email'
                    placeholder='email'
                    name='email'
                    required
                />
                <select 
                    className='in'
                    onChange={handleChange}
                    value={formData.landscaping}
                    name='landscaping'
                >
                    <option value="landscaping">Landscaping</option>
                    <option value="commercial">Commercial</option>
                    <option value="private">Private</option>

                </select>
                
                
                <textarea 
                    placeholder='Message' 
                    className='inp'
                    name='message'
                    onChange={handleChange}
                    value={formData.message}    
                />
            </form>
            </div> 
            <div className='but but2' onClick={handleSubmit}>
            <a href='#section2' > Send Request</a>    
            </div>   
        </div>
        
    </div>
  )
}

export default Section6