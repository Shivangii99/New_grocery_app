import React from 'react'
import '../Styles/hero.css'
import hPhoto from '../photos-lib/vegetable-removebg-preview.png'

const Hero = () => {
  return (
    <div className='hero-contain'>
      <div className='heading'>
        <h2><span>Welcome</span> to the World of fresh and green groceries</h2>
        <p>Elevate yoyr Culinary experience with handpicked itmes and exceptional quality</p>
        <div className='btn'>
            <button>Discounts</button>
            <button>Order now</button>
        </div>
      </div>
      <div className='image'>
        <img src={hPhoto} alt='hero-image'/>
      </div>
    </div>
  )
}

export default Hero
