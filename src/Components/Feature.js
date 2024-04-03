import React from 'react'
import '../Styles/feature.css'
import onion from '../photos-lib/vege.png'
import Apple from '../photos-lib/Apple.png'
import Tomatoes from '../photos-lib/tomatoes.png'
import Bread from '../photos-lib/bread.png'
import Brocoli from '../photos-lib/brocoli.png'
import Capsicum from '../photos-lib/capsicum.png'

export const Feature = ()=>{
    const cards=[
        {
            Name: 'Onion',
            Price: '10/kg',
            image: onion,

        },
        {
            Name: 'Tomatoes',
            Price: '25/kg',
            image: Tomatoes,

        },
        {
            Name: 'Bread',
            Price: '50/psc',
            image:Bread,

        },
        {
            Name: 'Broccoli',
            Price: '70/kg',
            image: Brocoli,

        },
        {
            Name: 'Capsicum',
            Price: '90/kg',
            image: Capsicum,

        },
        {
            Name: 'Apple',
            Price: '130/kg',
            image: Apple,

        },
        {
            Name: 'Bread',
            Price: '50/psc',
            image:Bread,

        },
        {
            Name: 'Broccoli',
            Price: '70/kg',
            image: Brocoli,

        },
    ]
    return(
        <>
        <div className="feature">
            <h3>Featured PRODUCTS</h3>
            <div className="feature-contain">
                {cards.map((card, i)=>
                    <div className="card" key={i}>
                    <img src={card.image}/>
                    <p>{card.Name}</p>
                    <p>{card.Price}</p>
                    <button>Add</button>
                </div>
                )} 
            </div>
            <div className='btn'>
            <p class="more">More &gt;</p>
            </div>
        </div>
        </>
    )
}
