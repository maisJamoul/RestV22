import React from 'react';
import { Hero,AboutUs,OurMenu,OurChefs,KlassyWeek,Contact } from '../../sections';

function Content(props) {
  return (
    <div className="  ">
        <Hero/>
        <AboutUs />
        <OurMenu />
        <OurChefs />
        <KlassyWeek />
        <Contact />
    </div>
  )
}

export default Content
