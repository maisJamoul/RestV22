import React from 'react'
import './OurChefs.css';
import {OurChefs} from '../../../Data/OurChefs.js';
import {CardChef,SectionHeader} from '../../Container/index';

function OurChef() {
  return (<>
    <div className="container section-ourChefs" id="chefs">
      <div className="ourChefsHeader">
      <SectionHeader>
          Our Chef
        </SectionHeader>
        <h4 className="CardSectionTitle  fw-bolder">We offer the best ingredients for you</h4>
      </div>
      <div className="ourChefs-items row mx-0">
        {OurChefs.map((item)=>{
          return <CardChef key={item.id} pos={item.pos} name={item.name} img={item.img}/>
        })}


      </div>
    </div>
  </>
  )
}

export default OurChef
