import React from 'react'
import '../Styles/footer.css'
import Card from '../photos-lib/cardpay.png'
import Ecomm from '../photos-lib/e=comm.png'


const Footer=()=> {
  return (
    <div>
      <div className="pre-footer">
            <div className="pre-foot">
                <img src={Card} alt="photo"/>
                <p>Easy Transaction</p>
            </div>
            <div className="pre-foot">
                <img src={Ecomm} alt="photo"/>
                <p>Free Delivery</p>
            </div>
            <div className="pre-foot">
                <img src={Card} alt="photo"/>
                <p>Esay Return</p>
            </div>
            <div className="pre-foot">
                <img src={Ecomm} alt="photo"/>
                <p>Support 24/7</p>
            </div>
        </div>
        <div className="grid">
            <div className="g-1 g-common">
                <h3>Quick Links</h3>
                <ol>
                    <li>Home</li>
                    <li>categories</li>
                    <li>order</li>
                    <li>Shopping cart</li>
                    <li>My list</li>
                </ol>
            </div>
            <div className="g-2 g-common">
                <h3>Informations</h3>
                <ol>
                    <li>Home</li>
                    <li>categories</li>
                    <li>order</li>
                    <li>Shopping cart</li>
                    <li>My list</li>
                </ol>
            </div>
            <div className="g-3 g-common">
                <h3>Categories</h3>
                <ol>
                    <li>Home</li>
                    <li>categories</li>
                    <li>order</li>
                    <li>Shopping cart</li>
                    <li>My list</li>
                </ol>
            </div>
            <div className="g-4 g-common">
                <h3>About store</h3>
                <ol>
                    <li>Home</li>
                    <li>categories</li>
                    <li>order</li>
                    <li>Shopping cart</li>
                    <li>My list</li>
                </ol>
            </div>
        </div>
        <div className="footer">
            <p>@ 2024 GroceriesStore.com. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer;
