
import {SectionHeader} from '../../Container/index';
import {aboutImg} from './../../../Data/aboutImg.js';
import aboutImg2 from './../../../assets/about-video-bg.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className=" container  section-about my-5" id="about">
      <div className="row mx-0" >
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-stretch">
            <SectionHeader className="pt-0">
                About Us
            </SectionHeader>
            <h4 className="py-3 fw-bolder">We Leave A Delicious Memory For You</h4>
            <p>Yummy is one of the best restaurant HTML templates with Bootstrap v4.5.2 CSS 
              framework. You can download and feel free to use this website template layout for your 
              restaurant business. You are allowed to use this template for commercial purposes.
              You are NOT allowed to redistribute the template ZIP file on any template donwnload 
              website. Please contact us for more information.
            </p>
            <div className=" d-flex justify-content-between align-items-center">
              {
                aboutImg.map((item)=>{
                  return <div className="aboutImg me-2" key={item.id}>
                    <img src={item.img} alt={item.id} />
                  </div>
                }
                )
              }
            </div>
          </div>
        <div className="col-md-6">
          <div className="p-lg-5 pt-md-3 mt-5">
            <img src={aboutImg2} alt="about-video-bg" />
          </div>
        </div>
      </div>
  </div>
  )
}

export default AboutUs
