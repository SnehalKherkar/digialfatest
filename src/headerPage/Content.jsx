import React from 'react'
import "./content.css"
import laptopimg from "../images/laptopimg.png"

const Content = () => {
    return (
        <div>
            <div className='content'>
                <div className='contentheading'>
                    <h1>Lessons and insights <span className='years'>from 8 years</span></h1>
                    <p>Where to grow your business as a photographer:site or social media?</p>
                    <button>Register</button>
                </div>
                <div >
                    <img className='contentImg' src={laptopimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content
