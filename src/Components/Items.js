import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/item.css'
;
const Items = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
      };
      
      return (
        <div>
          <Slider {...settings}>
            <div>
              <h5 className='item i1'>Onion</h5>
            </div>
            <div>
              <h5 className='item i2'>Tomatoes</h5>
            </div>
            <div>
              <h5 className='item i3'>Apple</h5>
            </div>
            <div>
              <h5 className='item i4'>Bread</h5>
            </div>
            <div>
              <h5 className='item i5'>Broccoli</h5>
            </div>
            <div>
              <h5 className='item i6'>Capsicum</h5>
            </div>
            <div>
              <h5 className='item i7'>Apple</h5>
            </div>
            <div>
              <h5 className='item i8'>Bread</h5>
            </div>
          </Slider>
        </div>
      );
    };
export default Items
