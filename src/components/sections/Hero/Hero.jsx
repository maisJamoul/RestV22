import React from 'react'
import './Hero.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 
import {HeroImg} from './../../../Data/HeroImg';

const Hero=()=> {
  const options = {
    type: 'loop', 
    autoplay: true,
    height: '30rem',
    padding:0,
    margin:0,
    
    // gap: '1rem',
    // pauseOnHover: false,
    // resetProgress: false,
    // rewind:true
  
  };
  return (
    <div className="Hero row mx-0">
      <div className="col-md-5 redBlock align-content-center">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <h1 className="HeroTitle fs-md-5 text-center">
            Yummy Restaurant
          </h1>
          <span className="subtitle-Hero mb-4 d-block text-capitalize">
            the best experience
          </span>
          <button className="mb-4 p-2 border border-0">
            Make A reservation
          </button>
        </div>
      </div>
      <div className="col-md-7 border border-success">
        <Splide
          options={options}
          hasTrack={true}
        >
          {
            HeroImg.map((item)=>
              <SplideSlide className=" SplideImg " key={item.id} >
                <div className="HImg mx-0 px-0">
                  <img src={item.img} className='SImg' alt={item.id} />
                </div>
              </SplideSlide>
            )
          } 

        </Splide>
      </div>
    </div>
  )
}

export default Hero
