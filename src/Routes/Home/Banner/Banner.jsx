import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/7.jpg'
import img2 from '../../../assets/3.webp'
import img3 from '../../../assets/4.jpg'
import img4 from '../../../assets/5.webp'
import img5 from '../../../assets/7.jpg'
import img6 from '../../../assets/6.jpg'



const Banner = () => {
    return (
        <div className='flex '>
              <Carousel className='' >
            <div className=''>
                <img className='' src={img5} />
            </div>
           
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            {/* <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div> */}

        </Carousel>
        <div>
            <div  className=''>
            <img className='h-[250px]' src={img3} />

            </div>
            <div className='mt-4 m-2 '>
            <img className='h-[50%]' src={img6} />
            </div>
           
        </div>
        </div>
       

    );
};

export default Banner;