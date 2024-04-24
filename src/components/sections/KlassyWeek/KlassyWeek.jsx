import React from 'react'
import './KlassyWeek';
import {menuItems} from './../../../Data/menuItems';
import SectionHeader from '../../Container/SectionHeader/SectionHeader';
import SectionWrapper from '../../Container/SectionWrapper/SectionWrapper';
import CardKlassyWeek from '../../Container/CardClassyWeek/CardClassyWeek';
function KlassyWeek() {
  return (
    <>
      <SectionWrapper>
        {/* <SectionHeader>Our Menu</SectionHeader> */}
     
     {/* {menuItems.map(item=> 
        
            <CardKlassyWeek  key={item.id}  id={item.id} img={item.img} name={item.name}/>
        
        )} */}
       
       
      
    </SectionWrapper>
    </>
  )
}

export default KlassyWeek
