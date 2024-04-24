import React from 'react';
import './OurMenu.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import {menuItems} from './../../../Data/menuItems';
import SectionHeader from '../../Container/SectionHeader/SectionHeader';
import SectionWrapper from '../../Container/SectionWrapper/SectionWrapper';
import CardMenu from '../../Container/CardMenu/CardMenu';

import { useContext} from 'react';
import { RestContext } from '../../../hooks/RestContext';

function OurMenu() {

  const {addToReserv,meals}=useContext(RestContext);
  const handleAdd=(item)=>{
    addToReserv(item);
    console.log(meals)
  }

  const options={ 
    type:'loop',
    perPage:5,  
    breakpoints: {
      640: {
        perPage: 1,
      },
      768:{
        perPage: 2,
      },
      992:{
        perPage: 3,
      },
      1200:{
        perPage: 4,
      }
    },
    padding:0,
    autoplay: true, 
    rewind :true,
    perMove:-1 }
  return (
    <div className="container  Our-Menu my-5" id="menu">
      <SectionWrapper>
        <SectionHeader>
          our Menu
        </SectionHeader>
        <p className='fw-bolder'>Our selection of cakes with quality taste</p>
        <Splide  className="splide" options={options}  aria-label="My Favorite Images">
          {menuItems.map(item=> 
            <SplideSlide  key={item.id} >
                <CardMenu  img={item.img} name={item.name} desc={item.desc} price={item.price}>
                <button className="btn bg-white text-danger btn-sm" onClick={(e)=>handleAdd(item)}>Add</button>
                </CardMenu>
            </SplideSlide>
          )}

        </Splide>
      </SectionWrapper>

    </div>

  )
}

export default OurMenu
