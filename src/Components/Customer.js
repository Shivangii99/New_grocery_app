import React from 'react'
import '../Styles/cust.css'
import Beauty from '../photos-lib/Beauty_Tips___Tricks__DIY_Hacks_for_Face__Healthy_Hair___Glowing_Skin-removebg-preview 1.png'
import Female from '../photos-lib/Female13.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/cust2.css'

const Customer = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='customer'>
                    <div className="customer-contain">
                        <div className="cust-head">
                            <h3>Happy Customers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.dolorem beatae voluptatum aspernatur est, amet laborum.</p>
                            <div className="cust-btn">
                                <button>&lt;</button>
                                <button>&gt;</button>
                            </div>
                        </div>
                        <div className="cust-img">
                            <img className="frame" src={Beauty} alt="1" />
                            <img className="female" src={Female} alt="2" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="customer-contain">
                        <div className="cust-head">
                            <h3>Happy Customers</h3>
                            <p>Lorem ipsum dolor sit amet dgdfhd hdg vhchuuy gvsgfyw bbis fyogcc hhsd jds .voluptatum aspernatur est, amet laborum.</p>
                            <div className="cust-btn">
                                <button>&lt;</button>
                                <button>&gt;</button>
                            </div>
                        </div>
                        <div className="cust-img">
                            <img className="frame" src={Beauty} alt="1" />
                            <img className="female" src={Female} alt="2" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="customer-contain">
                        <div className="cust-head">
                            <h3>Happy Customers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos vitae dolorem beatae voluptatum aspernatur est, amet laborum.</p>
                            <div className="cust-btn">
                                <button>&lt;</button>
                                <button>&gt;</button>
                            </div>
                        </div>
                        <div className="cust-img">
                            <img className="frame" src={Beauty} alt="1" />
                            <img className="female" src={Female} alt="2" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Customer
