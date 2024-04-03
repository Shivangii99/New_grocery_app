import SPhoto from '../photos-lib/static.png'
import React from 'react'
import '../Styles/static.css'

const Static = () => {
  return (
    <div className='s-contain'>
      <img src={SPhoto} alt='decorative photo'/>
      <div className='stat'>
        <h2>Combos, You’ll Loose
You’ll Regret</h2>
<button>Explore now</button>
      </div>
    </div>
  )
}

export default Static
